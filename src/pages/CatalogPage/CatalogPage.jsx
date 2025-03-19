import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./CatalogPage.module.css";

import { ErrorToast } from "../../utils/errorToast";

import * as carSelectors from "../../redux/cars/selectors";
import * as filterSelectors from "../../redux/filters/selectors";
import { resetCars } from "../../redux/cars/carsSlice";
import { getBrands } from "../../redux/filters/operations";
import { getCars } from "../../redux/cars/operations";

import CarsList from "../../components/CarsList/CarsList";
import BrandsList from "../../components/BrandsList/BrandsList";
import PriceList from "../../components/PriceList/PriceList";
import CarMileage from "../../components/CarMileage/CarMileage";
import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";

const CatalogPage = () => {
  const carsList = useSelector(carSelectors.selectCars);
  const brandsList = useSelector(filterSelectors.selectBrands);
  const filtersList = useSelector(filterSelectors.selectFilters);
  const page = useSelector(carSelectors.selectPage);
  const totalPages = useSelector(carSelectors.selectTotalPages);
  const isLoading = useSelector(carSelectors.selectIsLoading);
  const dispatch = useDispatch();
  // console.log(filtersList);

  // const [selectedFilters, setSelectedFilters] = useState(filtersList);

  const prices = Array.from({ length: 18 }, (_, index) => 30 + index * 10); // Масив цін для дропдауна
  // const formatNumberWithCommas = (value) => {
  //   if (!value) return value;
  //   return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  useEffect(() => {
    try {
      dispatch(resetCars());
      dispatch(getCars({ page: 1 }));
      dispatch(getBrands());
    } catch (error) {
      ErrorToast(error.message || "Request failed! Please try again later");
    }

    // setSelectedFilters((prev) => ({
    //   ...prev,
    //   minMileage: formatNumberWithCommas(prev.minMileage),
    //   maxMileage: formatNumberWithCommas(prev.maxMileage),
    // }));
  }, [dispatch]);

  // const handleChange = (key, value) => {
  //   setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  // };

  const handleSearch = async () => {
    try {
      dispatch(resetCars()); // Очищуємо попередні дані перед новим пошуком
      dispatch(getCars({ filters: filtersList }));
    } catch (error) {
      ErrorToast(error.message || "Request failed! Please try again later");
    }
  };

  const onLoadMoreClick = () => {
    if (page < totalPages) {
      dispatch(getCars({ filters: filtersList, page: page + 1 }));
    }
  };

  return (
    <Container>
      <div className={css.catalogWrapper}>
        {/* // FILTERS */}
        <div className={css.filterCont}>
          <BrandsList brands={brandsList} filtersList={filtersList} />
          <PriceList prices={prices} filtersList={filtersList} />
          <CarMileage />
          <button
            type="button"
            className={css.searchBtn}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {/* // CARS LIST */}
        {isLoading && <Loader />}
        {!isLoading && carsList.length === 0 && (
          <p className={css.noCarsMess}>
            Sorry! We don't have any cars according to your search parameters
          </p>
        )}
        <CarsList cars={carsList} />
        {/* // LOAD MORE BTN */}
        {page < totalPages && (
          <button
            type="button"
            className={css.loadMoreBtn}
            onClick={onLoadMoreClick}
          >
            Load more
          </button>
        )}
      </div>
    </Container>
  );
};

export default CatalogPage;

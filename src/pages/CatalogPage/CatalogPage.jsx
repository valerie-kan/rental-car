import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./CatalogPage.module.css";

import { ErrorToast } from "../../utils/errorToast";

import * as selectors from "../../redux/selectors";
import { resetCars } from "../../redux/carsSlice";
import { getBrands, getCars } from "../../redux/operations";

import CarsList from "../../components/CarsList/CarsList";
import BrandsList from "../../components/BrandsList/BrandsList";
import PriceList from "../../components/PriceList/PriceList";
import CarMileage from "../../components/CarMileage/CarMileage";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const carsList = useSelector(selectors.selectCars);
  const brandsList = useSelector(selectors.selectBrands);
  const filtersList = useSelector(selectors.selectFilters);
  const page = useSelector(selectors.selectPage);
  const totalPages = useSelector(selectors.selectTotalPages);
  const isLoading = useSelector(selectors.selectIsLoading);
  const dispatch = useDispatch();

  // const [priceOptions, setPriceOptions] = useState([]);

  const priceArr = carsList.map((car) => car.rentalPrice); // Масив цін на оренду
  const priceList = [...new Set(priceArr)]; // Масив без повторюваних значень
  const sortedPrices = priceList.map(Number).sort((a, b) => a - b); // Відсортований масив

  useEffect(() => {
    try {
      dispatch(resetCars());
      dispatch(getCars({ page: 1 }));
      dispatch(getBrands());
    } catch (error) {
      ErrorToast(error.message || "Request failed! Please try again later");
    }
  }, [dispatch]);

  const handleSearch = async () => {
    try {
      // const response = await
      dispatch(resetCars()); // Очищуємо попередні дані перед новим пошуком
      dispatch(getCars({ filters: filtersList }));
      // console.log(response);
      // if (response.payload.length > 0) {
      //   // Якщо є машини, оновлюємо список цін
      //   const priceArr = response.payload.map((car) => car.rentalPrice);
      //   const priceList = [...new Set(priceArr)]
      //     .map(Number)
      //     .sort((a, b) => a - b);
      //   setPriceOptions(priceList);
      // } else {
      //   // Якщо машин не знайдено, залишаємо попередній список цін
      //   if (priceOptions.length === 0) {
      //     // Якщо список цін порожній, можна оновити ціни за всіма машинами
      //     const priceArr = carsList.map((car) => car.rentalPrice);
      //     const priceList = [...new Set(priceArr)]
      //       .map(Number)
      //       .sort((a, b) => a - b);
      //     setPriceOptions(priceList);
      //   }
      // }
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
    <div className={css.catalogWrapper}>
      {/* // FILTERS */}
      <div className={css.filterCont}>
        <BrandsList brands={brandsList} />
        <PriceList
          selectedPrice={filtersList.rentalPrice}
          prices={sortedPrices}
        />
        <CarMileage />
        <button type="button" className={css.searchBtn} onClick={handleSearch}>
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
  );
};

export default CatalogPage;

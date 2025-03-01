import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./CatalogPage.module.css";

import { ErrorToast } from "../../utils/errorToast";

import { selectBrands, selectCars, selectFilters } from "../../redux/selectors";
import { getBrands, getCars } from "../../redux/operations";

import CarsList from "../../components/CarsList/CarsList";
import BrandsList from "../../components/BrandsList/BrandsList";
import PriceList from "../../components/PriceList/PriceList";
import CarMileage from "../../components/CarMileage/CarMileage";

const CatalogPage = () => {
  const carsList = useSelector(selectCars);
  const brandsList = useSelector(selectBrands);
  const filtersList = useSelector(selectFilters);
  const dispatch = useDispatch();

  // const [priceOptions, setPriceOptions] = useState([]);

  const priceArr = carsList.map((car) => car.rentalPrice); // Масив цін на оренду
  const priceList = [...new Set(priceArr)]; // Масив без повторюваних значень
  const sortedPrices = priceList.map(Number).sort((a, b) => a - b); // Відсортований масив

  useEffect(() => {
    try {
      dispatch(getCars());
      dispatch(getBrands());
    } catch (error) {
      ErrorToast(error.message || "Request failed! Please try again later");
    }
  }, [dispatch]);

  const handleSearch = async () => {
    try {
      // const response = await
      dispatch(getCars(filtersList));
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

  return (
    <>
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
      {carsList.length === 0 && (
        <p className={css.noCarsMess}>
          Sorry! We don't have any cars according to your search parameters
        </p>
      )}
      <CarsList cars={carsList} />
      <button type="button" className={css.loadMoreBtn}>
        Load more
      </button>
    </>
  );
};

export default CatalogPage;

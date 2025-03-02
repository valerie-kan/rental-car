import { useDispatch } from "react-redux";

import css from "../BrandsList/BrandsList.module.css";

import { setFilters } from "../../redux/carsSlice";

const PriceList = ({ prices, selectedPrice }) => {
  const dispatch = useDispatch();

  const handlePriceChange = (e) => {
    dispatch(setFilters({ rentalPrice: e.target.value }));
  };

  return (
    <label className={css.label}>
      <span className={css.span}>Price/ 1 hour</span>
      <select
        className={css.select}
        value={selectedPrice}
        onChange={handlePriceChange}
      >
        <option value="" disabled>
          Choose a price
        </option>
        {prices.map((price, index) => (
          <option value={price} key={`${price}-${index}`}>
            {price}
          </option>
        ))}
      </select>
    </label>
  );
};

export default PriceList;

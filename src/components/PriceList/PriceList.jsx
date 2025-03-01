import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/carsSlice";
import css from "../BrandsList/BrandsList.module.css";

const PriceList = ({ prices, selectedPrice }) => {
  const dispatch = useDispatch();

  const handlePriceChange = (e) => {
    dispatch(setFilters({ rentalPrice: e.target.value }));
  };

  return (
    <label className={css.label}>
      <span className={css.span}>Price/ 1 hour</span>
      <select
        // defaultValue=""
        className={css.select}
        value={selectedPrice}
        onChange={handlePriceChange}
      >
        <option className={css.item} value="" disabled>
          Choose a price
        </option>
        {prices.map((price) => (
          <option className={css.item} value={price} key={price}>
            {price}
          </option>
        ))}
      </select>
    </label>
  );
};

export default PriceList;

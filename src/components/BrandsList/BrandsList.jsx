import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/carsSlice";

import css from "./BrandsList.module.css";

const BrandsList = ({ brands }) => {
  const dispatch = useDispatch();

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    dispatch(setFilters({ brand: selectedBrand })); // Оновлюємо фільтри при зміні
  };

  return (
    <label className={css.label}>
      <span className={css.span}>Car brand</span>
      <select
        defaultValue=""
        className={css.select}
        onChange={handleBrandChange}
      >
        <option value="" disabled>
          Choose a brand
        </option>
        {brands.map((brand) => (
          <option value={brand} key={brand}>
            {brand}
          </option>
        ))}
      </select>
    </label>
  );
};

export default BrandsList;

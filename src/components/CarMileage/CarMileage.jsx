import { useState } from "react";
import { useDispatch } from "react-redux";

import css from "./CarMileage.module.css";
import { setFilters } from "../../redux/carsSlice";

const CarMileage = () => {
  const dispatch = useDispatch();

  const prefixMin = "From "; // початкове значення
  const prefixMax = "To "; // початкове значення

  const [minMileage, setminMileage] = useState(prefixMin);
  const [maxMileage, setmaxMileage] = useState(prefixMax);

  const handleMinChange = (e) => {
    const value = e.target.value.replace(prefixMin, ""); // Видаляємо префікс перед перевіркою
    if (/^\d*$/.test(value)) {
      setminMileage(prefixMin + value);
      dispatch(setFilters({ minMileage: value })); // Оновлюємо фільтри при зміні
    }
  };

  const handleMaxChange = (e) => {
    const value = e.target.value.replace(prefixMax, "");
    if (/^\d*$/.test(value)) {
      setmaxMileage(prefixMax + value);
      dispatch(setFilters({ maxMileage: value }));
    }
  };

  return (
    <div className={css.mileageCont}>
      <span className={css.span}>Car mileage / km</span>
      <label className={css.label}>
        <input
          type="text"
          className={css.input}
          value={minMileage}
          onChange={handleMinChange}
        />
        <input
          type="text"
          className={css.input}
          value={maxMileage}
          onChange={handleMaxChange}
        />
      </label>
    </div>
  );
};

export default CarMileage;

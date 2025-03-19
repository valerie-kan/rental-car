import { useDispatch, useSelector } from "react-redux";

import css from "./CarsList.module.css";

import { ErrorToast } from "../../utils/errorToast";

import {
  addFavourite,
  removeFavourite,
} from "../../redux/favourites/favouritesSlice";
import { selectFavourites } from "../../redux/favourites/selectors";

import CarItem from "../CarItem/CarItem";

const CarsList = ({ cars }) => {
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();

  const toggleFavourite = (car) => {
    try {
      if (favourites.some((item) => item.id === car.id)) {
        dispatch(removeFavourite(car.id));
      } else {
        dispatch(addFavourite(car));
      }
    } catch (error) {
      ErrorToast(error.message || "Request failed! Please try again later");
    }
  };

  return (
    <ul className={css.carsList}>
      {cars.map((car) => {
        const isFavourite = favourites.some((item) => item.id === car.id);
        return (
          <li className={css.carItem} key={car.id}>
            <CarItem
              car={car}
              toggleFavourite={toggleFavourite}
              isFavourite={isFavourite}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CarsList;

import css from "./CarsList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../redux/favouritesSlice";
import CarItem from "../CarItem/CarItem";
import { ErrorToast } from "../../utils/errorToast";
import { useNavigate } from "react-router-dom";
import { selectFavourites } from "../../redux/selectors";

// import { getCarById } from "../../redux/operations.js";

const CarsList = ({ cars }) => {
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const readMoreBtnClick = (car) => {
    localStorage.setItem("carDetails", JSON.stringify(car));
    navigate(`/catalog/${car.id}`);
    // try {
    //   dispatch(getCarById(car.id));
    // } catch (error) {
    //   console.log("Err occured");
    //   ErrorToast(error.message || "Car is not found!");
    // }
  };

  return (
    <ul className={css.carsList}>
      {/* {Array.isArray(cars) && */}
      {cars.map((car) => {
        const isFavourite = favourites.some((item) => item.id === car.id);
        return (
          <li className={css.carItem} key={car.id}>
            <CarItem
              car={car}
              toggleFavourite={toggleFavourite}
              isFavourite={isFavourite}
              readMoreBtnClick={readMoreBtnClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CarsList;

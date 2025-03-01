import { ReactSVG } from "react-svg";

import css from "./CarItem.module.css";

import heart from "../../assets/heart.svg";
import heartActive from "../../assets/heart-blue.svg";
// import { useNavigate } from "react-router-dom";

const CarItem = ({ car, toggleFavourite, isFavourite, readMoreBtnClick }) => {
  // const navigate = useNavigate();

  return (
    <>
      {/* <div className={css.itemCont}> */}
      <div className={css.imgCont}>
        <img src={car.img} alt="Car photo" className={css.carImg} />
        {isFavourite ? (
          <ReactSVG
            src={heartActive}
            onClick={() => toggleFavourite(car)}
            className={css.heartIcon}
          />
        ) : (
          <ReactSVG
            src={heart}
            onClick={() => toggleFavourite(car)}
            className={css.heartIcon}
          />
        )}
      </div>
      <div className={css.mainCarInfo}>
        <p>
          {car.brand} <span style={{ color: "#3470ff" }}>{car.model}</span>,{" "}
          {car.year}
        </p>
        <p>${car.rentalPrice}</p>
      </div>
      <div className={css.carDetails}>
        <span className={css.carAddInfo}>
          {car.address.split(",")[1].trim()}
        </span>
        <span className={css.carAddInfo}>
          {car.address.split(",")[2].trim()}
        </span>
        <span className={css.carAddInfo}>{car.rentalCompany}</span> <br />
        <span className={css.carAddInfo}>
          {car.type.charAt(0).toUpperCase() + car.type.slice(1).toLowerCase()}
        </span>
        <span className={css.carAddInfo}>
          {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
        </span>
      </div>
      {/* </div> */}
      <button
        // onClick={() => navigate(`/catalog/${car.id}`)}
        onClick={() => readMoreBtnClick(car)}
        className={css.carBtn}
      >
        Read more
      </button>
    </>
  );
};

export default CarItem;

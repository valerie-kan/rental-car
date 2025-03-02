import { ReactSVG } from "react-svg";

import css from "./MainCarDetails.module.css";

import locationIcon from "../../assets/location.svg";

const MainCarDetails = ({ car }) => {
  return (
    <div className={css.mainCarInfo}>
      <h2 className={css.carTitle}>
        {car.brand} {car.model}, {car.year}
      </h2>
      <div className={css.locationAndMileageWrapper}>
        <span className={css.locationWrapper}>
          <ReactSVG src={locationIcon} />
          {car.address.split(",")[1].trim()}, {car.address.split(",")[2].trim()}
        </span>
        <span>
          Mileage: {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
        </span>
      </div>
      <p className={css.price}>${car.rentalPrice}</p>
      <p>{car.description}</p>
    </div>
  );
};

export default MainCarDetails;

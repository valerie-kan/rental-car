import { ReactSVG } from "react-svg";

import css from "./AdditionalCarDetails.module.css";

import checkIcon from "../../assets/check-circle.svg";
import calendar from "../../assets/calendar.svg";
import carIcon from "../../assets/car.svg";
import fuelPump from "../../assets/fuel-pump.svg";
import gear from "../../assets/gear.svg";

const AdditionalCarDetails = ({ car }) => {
  return (
    <div className={css.addInfoWrapper}>
      <div>
        <h3 className={css.addInfoTitle}>Rental Conditions:</h3>
        {car.rentalConditions.map((condition) => (
          <span key={condition} className={css.addInfoText}>
            <ReactSVG src={checkIcon} className={css.icon} /> {condition}
          </span>
        ))}
      </div>
      <div>
        <h3 className={css.addInfoTitle}>Car Specifications:</h3>
        <span className={css.addInfoText}>
          <ReactSVG src={calendar} className={css.icon} />
          Year: {car.year}
        </span>
        <span className={css.addInfoText}>
          <ReactSVG src={carIcon} className={css.icon} />
          Type:{" "}
          {car.type.charAt(0).toUpperCase() + car.type.slice(1).toLowerCase()}
        </span>
        <span className={css.addInfoText}>
          <ReactSVG src={fuelPump} className={css.icon} />
          Fuel Consumption: {car.fuelConsumption}
        </span>
        <span className={css.addInfoText}>
          <ReactSVG src={gear} className={css.icon} />
          Engine Size: {car.engineSize}
        </span>
      </div>
      <div>
        <h3 className={css.addInfoTitle}>Accessories and functionalities:</h3>
        {car.accessories.map((accessory) => (
          <span key={accessory} className={css.addInfoText}>
            <ReactSVG src={checkIcon} className={css.icon} />
            {accessory}
          </span>
        ))}
        {car.functionalities.map((functionality) => (
          <span key={functionality} className={css.addInfoText}>
            <ReactSVG src={checkIcon} className={css.icon} />
            {functionality}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AdditionalCarDetails;

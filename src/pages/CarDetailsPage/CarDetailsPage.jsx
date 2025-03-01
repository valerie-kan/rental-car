import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import css from "./CarDetailsPage.module.css";

import locationIcon from "../../assets/location.svg";
import checkIcon from "../../assets/check-circle.svg";
import calendar from "../../assets/calendar.svg";
import carIcon from "../../assets/car.svg";
import fuelPump from "../../assets/fuel-pump.svg";
import gear from "../../assets/gear.svg";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";
import { Form, Formik } from "formik";

import { CarDetailsSchema } from "../../utils/schemas";

import Input from "../../components/Input/Input";

const INITIAL_VALUES = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const CarDetailsPage = () => {
  // const dispatch = useDispatch();
  // const { id } = useParams();
  // // console.log(id);
  // const cars = useSelector(selectCars);
  // console.log(car);
  const [car, setCar] = useState(null);

  // useEffect(async () => {
  //   try {
  //     dispatch(getCarById(car.id));
  //   } catch (error) {
  //     ErrorToast(error.message || "Car is not found!");
  //   }
  // }, [dispatch]);
  // const car = cars.find((item) => item.id === id);

  useEffect(() => {
    const carDetails = localStorage.getItem("carDetails");
    // console.log(carDetails);

    if (carDetails) {
      setCar(JSON.parse(carDetails));
    } else {
      ErrorToast("Car is not found!"); // Якщо немає даних, показуємо тост
    }
    // console.log(carDetails);
  }, []);

  const handleSubmit = (values, actions) => {
    SuccessToast("Congrats! You have booked selected car");
    actions.resetForm();
  };

  return (
    <>
      {!car && <p className={css.loading}>Loading car details...</p>}
      {car && (
        <div className={css.carDetails}>
          {/* // IMG AND FORM */}
          <div className={css.imgAndFormWrapper}>
            <div className={css.imgCont}>
              <img className={css.img} src={car.img} alt="Selected car photo" />
            </div>
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={CarDetailsSchema}
              onSubmit={handleSubmit}
            >
              <Form className={css.form}>
                <div>
                  <h3 className={css.formTitle}>Book your car now</h3>
                  <p className={css.formText}>
                    Stay connected! We are always ready to help you.
                  </p>
                </div>
                <div className={css.formInputs}>
                  <Input type="text" name="name" placeholder="Name*" />
                  <Input type="email" name="email" placeholder="Email*" />
                  <Input type="text" name="date" placeholder="Booking date" />
                  <Input as="textarea" name="comment" placeholder="Comment" />
                </div>
                <button className={css.submitBtn}>Send</button>
              </Form>
            </Formik>
          </div>
          <div className={css.carInfoWrapper}>
            {/* // MAIN CAR DETAILS */}
            <div className={css.mainCarInfo}>
              <h2 className={css.carTitle}>
                {car.brand} {car.model}, {car.year}
              </h2>
              <div className={css.locationAndMileageWrapper}>
                <span className={css.locationWrapper}>
                  <ReactSVG src={locationIcon} className={css.icon} />
                  {car.address.split(",")[1].trim()},{" "}
                  {car.address.split(",")[2].trim()}
                </span>
                <span>
                  Mileage:{" "}
                  {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
                </span>
              </div>
              <p className={css.price}>${car.rentalPrice}</p>
              <p>{car.description}</p>
            </div>
            {/* // ADDITIONAL CAR DETAILS */}
            <div className={css.addInfoWrapper}>
              <div>
                <h3 className={css.addInfoTitle}>Rental Conditions:</h3>
                {car.rentalConditions.map((condition) => (
                  <span key={condition} className={css.addInfoText}>
                    <ReactSVG src={checkIcon} className={css.icon} />{" "}
                    {condition}
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
                  {car.type.charAt(0).toUpperCase() +
                    car.type.slice(1).toLowerCase()}
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
                <h3 className={css.addInfoTitle}>
                  Accessories and functionalities:
                </h3>
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
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetailsPage;

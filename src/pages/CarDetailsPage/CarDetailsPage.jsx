import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";

import css from "./CarDetailsPage.module.css";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";
import { CarDetailsSchema } from "../../utils/schemas";

import { getCarById } from "../../redux/operations";
import { selectCarDetails, selectIsLoading } from "../../redux/selectors";

import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import AdditionalCarDetails from "../../components/AdditionalCarDetails/AdditionalCarDetails";
import MainCarDetails from "../../components/MainCarDetails/MainCarDetails";

const INITIAL_VALUES = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarDetails);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const getCarDetails = async () => {
      try {
        dispatch(getCarById(id));
      } catch (error) {
        ErrorToast(error.message || "Car is not found!");
      }
    };
    getCarDetails();
  }, [dispatch, id]);

  const handleSubmit = (values, actions) => {
    SuccessToast("Congrats! You have booked selected car");
    actions.resetForm();
  };

  return (
    <>
      {isLoading && <Loader />}
      {car && (
        <div className={css.carDetails}>
          {/* // IMG */}
          <div className={css.imgAndFormWrapper}>
            <div className={css.imgCont}>
              <img className={css.img} src={car.img} alt="Selected car photo" />
            </div>
            {/* // FORM */}
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
          {/* // CAR INFO */}
          <div className={css.carInfoWrapper}>
            <MainCarDetails car={car} />
            <AdditionalCarDetails car={car} />
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetailsPage;

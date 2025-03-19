import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setFilters } from "../../redux/filters/filterSlice";

import SelectInput from "../SelectInput/SelectInput";
// import { selectFilters } from "../../redux/filters/selectors";

const PriceList = ({ prices }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("");
  const selectRef = useRef(null);
  // console.log(filtersList);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item) => {
    if (item) {
      setSelectedPrice(item);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(setFilters({ rentalPrice: selectedPrice }));
  }, [selectedPrice, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SelectInput
      selectRef={selectRef}
      toggleDropdown={toggleDropdown}
      selectedItem={selectedPrice}
      isOpen={isOpen}
      items={prices}
      handleSelect={handleSelect}
      selectName={"Price/ 1 hour"}
      category={"price"}
    />
  );
};

export default PriceList;

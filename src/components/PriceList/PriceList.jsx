import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setFilters } from "../../redux/carsSlice";

import SelectInput from "../SelectInput/SelectInput";

const PriceList = ({ prices }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const selectRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelectedPrices((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item]
    );
  };

  useEffect(() => {
    dispatch(setFilters({ rentalPrice: selectedPrices }));
  }, [selectedPrices, dispatch]);

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
      selectedItems={selectedPrices}
      isOpen={isOpen}
      items={prices}
      handleSelect={handleSelect}
      selectName={"Price/ 1 hour"}
      category={"price"}
    />
  );
};

export default PriceList;

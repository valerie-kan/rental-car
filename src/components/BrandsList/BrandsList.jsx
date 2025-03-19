import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { setFilters } from "../../redux/filters/filterSlice";

import SelectInput from "../SelectInput/SelectInput";

const BrandsList = ({ brands }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const selectRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelectedBrand(item);
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(setFilters({ brand: selectedBrand }));
  }, [selectedBrand, dispatch]);

  // Закриваємо дропдаун при кліку поза ним
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
      selectedItem={selectedBrand}
      isOpen={isOpen}
      items={brands}
      handleSelect={handleSelect}
      selectName={"Car brand"}
      category={"brand"}
    />
  );
};

export default BrandsList;

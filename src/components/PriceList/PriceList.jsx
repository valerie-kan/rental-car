import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setFilters } from "../../redux/carsSlice";

import SelectInput from "../SelectInput/SelectInput";

const PriceList = ({
  selectRef,
  toggleDropdown,
  selectedItems,
  isOpen,
  prices,
  handleSelect,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters({ rentalPrice: selectedItems }));
  }, [selectedItems, dispatch]);

  return (
    <SelectInput
      selectRef={selectRef}
      toggleDropdown={toggleDropdown}
      selectedItems={selectedItems}
      isOpen={isOpen}
      items={prices}
      handleSelect={handleSelect}
    />
  );
};

export default PriceList;

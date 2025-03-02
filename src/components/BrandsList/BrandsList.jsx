import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { setFilters } from "../../redux/carsSlice";

import SelectInput from "../SelectInput/SelectInput";

const BrandsList = ({
  selectRef,
  toggleDropdown,
  selectedItems,
  isOpen,
  brands,
  handleSelect,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters({ brand: selectedItems }));
  }, [selectedItems, dispatch]);

  return (
    <SelectInput
      selectRef={selectRef}
      toggleDropdown={toggleDropdown}
      selectedItems={selectedItems}
      isOpen={isOpen}
      items={brands}
      handleSelect={handleSelect}
    />
  );
};

export default BrandsList;

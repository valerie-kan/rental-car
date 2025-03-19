import { ReactSVG } from "react-svg";

// import clsx from "clsx";
import css from "./SelectInput.module.css";

import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";

const SelectInput = ({
  selectRef,
  toggleDropdown,
  selectedItem,
  isOpen,
  items,
  handleSelect,
  selectName,
  category,
}) => {
  return (
    <div className={css.container} ref={selectRef}>
      <label className={css.label}>
        <span className={css.span}>{selectName}</span>
        {/* // SELECT */}
        <div className={css.customSelect} onClick={toggleDropdown}>
          <div className={css.selected}>
            {selectedItem ? selectedItem : `Choose a ${category}`}
          </div>
          {isOpen ? (
            <ReactSVG src={arrowUp} className={css.arrow} />
          ) : (
            <ReactSVG src={arrowDown} className={css.arrow} />
          )}
        </div>
        {/* // DROPDOWN */}
        {isOpen && (
          <ul className={css.dropdown}>
            {items.map((item) => (
              <li
                key={item}
                className={css.option}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </label>
    </div>
  );
};

export default SelectInput;

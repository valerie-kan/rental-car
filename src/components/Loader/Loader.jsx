import { BarLoader } from "react-spinners";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrpr}>
      <BarLoader color="#3470ff" size={25} />
    </div>
  );
};

export default Loader;

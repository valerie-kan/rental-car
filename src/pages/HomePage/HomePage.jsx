import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.hero}>
      <div className={css.heroInfo}>
        <h1 className={css.heroTtl}>Find your perfect rental car</h1>
        <p className={css.heroText}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button type="button" className={css.heroBtn} onClick={handleClick}>
          View Catalog
        </button>
      </div>
    </div>
  );
};

export default HomePage;

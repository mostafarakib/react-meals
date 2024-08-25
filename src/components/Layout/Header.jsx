import mealsLogo from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>MealsHub</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsLogo} alt="A table full of delicious food" />
      </div>
    </>
  );
}

import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";

import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.cartToggleHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
}

import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  function cartToggleHandler() {
    setIsCartShown((prev) => !prev);
  }
  return (
    <CartProvider>
      {isCartShown && <Cart onCartToggle={cartToggleHandler} />}
      <Header onCartToggle={cartToggleHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

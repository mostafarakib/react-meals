import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  function cartToggleHandler() {
    setIsCartShown((prev) => !prev);
  }
  return (
    <>
      {isCartShown && <Cart onCartToggle={cartToggleHandler} />}
      <Header onCartToggle={cartToggleHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

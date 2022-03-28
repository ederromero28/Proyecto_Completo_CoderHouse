import "./App.css";
import Rutas from "./routes";
import CartContext from "./Context/CartContext";

export default function App() {
  return (
    <>
      <CartContext>
        <Rutas />
      </CartContext>
    </>
  );
}

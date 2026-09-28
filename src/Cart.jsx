import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";

export default function Cart({ buttonStyle }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  let total = 0;

  for (const product of cart) {
    total += product.price;
  }

  const groupedCart = [];
  for (const product of cart) {
    const item = groupedCart.find((item) => item.product.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      groupedCart.push({ product, quantity: 1 });
    }
  }

  return (
    <section>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {groupedCart.map(({ product, quantity }) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} width="60" height="60" style={{ objectFit: "contain", verticalAlign: "middle" }} />{" "}
              {product.name} - {product.price} руб{" "}
              <button type="button" style={buttonStyle} onClick={() => removeFromCart(cart.findIndex((item) => item.id === product.id))}>
                -
              </button>{" "}
              {quantity}{" "}
              <button type="button" style={buttonStyle} onClick={() => addToCart(product)}>
                +
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>Итого: {total} руб</p>
    </section>
  );
}

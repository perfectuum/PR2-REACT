import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext.jsx";
import { products } from "./products.js";

export default function Catalog({ buttonStyle }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleAdd(product) {
    addToCart(product);
    navigate("/cart");
  }

  const cardStyle = {
    padding: "16px",
    width: "220px",
  };

  return (
    <section>
      <h1>Каталог товаров</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((product) => (
          <article key={product.id} style={cardStyle}>
            <img
              src={product.image}
              alt={product.name}
              width="200"
              height="200"
              style={{ objectFit: "contain", backgroundColor: "#fff" }}
            />
            <h2 style={{ fontSize: "18px" }}>{product.name}</h2>
            <p>{product.price} руб</p>
            <button type="button" style={buttonStyle} onClick={() => handleAdd(product)}>
              В корзину
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

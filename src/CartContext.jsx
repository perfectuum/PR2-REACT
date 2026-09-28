import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart") || "[]"));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  function removeFromCart(index) {
    setCart((currentCart) => {
      const updatedCart = [...currentCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

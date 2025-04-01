const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const CartData = JSON.parse(cart);
    return CartData;
  } else return [];
};

const setCartToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];
  const stringifyData = JSON.stringify(newCart);
  localStorage.setItem("cart", stringifyData);
};

export { getCartFromLocalStorage, setCartToLocalStorage };

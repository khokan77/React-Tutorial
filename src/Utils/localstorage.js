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
  saveToLocalStorage(newCart);
};

const saveToLocalStorage = (cart) => {
  const stringifyData = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyData);
};

const removeFromStorge = (id) => {
  const cart = getCartFromLocalStorage();
  if (cart) {
    const remaingCart = cart.filter((remaingid) => remaingid !== id);
    saveToLocalStorage(remaingCart);
  }
};

export {
  getCartFromLocalStorage,
  setCartToLocalStorage,
  removeFromStorge as removeCart,
};

const getCartFromLocalStorage = (itemKey) => {
  const cart = localStorage.getItem(itemKey);
  if (cart) {
    const cartData = JSON.parse(cart);
    return cartData;
  } else return [];
};

const setCartToLocalStorage = (id, itemKey) => {
  const cart = getCartFromLocalStorage(itemKey);
  if (!cart.includes(id)) {
    const newCart = [...cart, id];
    saveToLocalStorage(newCart, itemKey);
    return true;
  } else return false;
};

const saveToLocalStorage = (cart, itemKey) => {
  const stringifyData = JSON.stringify(cart);
  localStorage.setItem(itemKey, stringifyData);
};

const removeFromStorge = (id, fav) => {
  console.log(fav);
  const cart = getCartFromLocalStorage(fav);
  if (cart) {
    const remaingCart = cart.filter((remaingid) => remaingid !== id);
    saveToLocalStorage(remaingCart, fav);
  }
};

export {
  getCartFromLocalStorage,
  setCartToLocalStorage,
  removeFromStorge as removeCart,
};

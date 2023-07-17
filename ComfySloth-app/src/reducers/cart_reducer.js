export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const { id, name, mainImg, price, selectedColor, cartAmount } =
      action.payload;

    const tempItem = state.cartItems.find(
      (item) => item.id === id && item.color === selectedColor
    );
    if (tempItem) {
      const newItems = state.cartItems.map((item) => {
        return { ...item, amount: item.amount + cartAmount };
      });
      return { ...state, cartItems: [...newItems] };
    }
    const cartItem = {
      id: id,
      name: name,
      img: mainImg.url,
      price: price,
      color: selectedColor,
      amount: cartAmount,
    };

    return { ...state, cartItems: [...state.cartItems, { ...cartItem }] };
  }
  if (action.type === "UPDATE_TOTAL_CART") {
    return {
      ...state,
      total_cart: state.cartItems.reduce((total, item) => {
        total += item.amount;
        return total;
      }, 0),
      subtotal: state.cartItems.reduce((total, item) => {
        total += item.price * item.amount;
        return total;
      }, 0),
    };
  }
  if (action.type === "UPDATE_ITEM_AMOUNT") {
    return {
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === action.payload.id && action.payload.todo === "minus"
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
          : { ...item, amount: item.amount + 1 }
      ),
    };
  }
  if (action.type === "CLR_CART_ITEM") {
    return {
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "CLR_CART") {
    return { ...state, cartItems: [] };
  }
  throw new Error("No Matching Acyion Type");
};

import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/cart_reducer";
const CartContext = React.createContext();
const defaultState = {
  cartItems: [],
  total_cart: 0,
  subtotal: 0,
  shipping_fee: 534,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTAL_CART" });
  }, [state.cartItems]);

  const AddToCart = ({
    name,
    price,
    mainImg,
    id,
    selectedColor,
    cartAmount,
  }) => {
    console.log(state.cartItems);

    dispatch({
      type: "ADD_ITEM",
      payload: { name, price, mainImg, id, selectedColor, cartAmount },
    });
  };

  const updateCartAmount = ({ todo, id }) => {
    dispatch({ type: "UPDATE_ITEM_AMOUNT", payload: { todo, id } });
  };
  const clearCartItem = (id) => {
    dispatch({ type: "CLR_CART_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        cartLoading: state.cartLoading,
        AddToCart: AddToCart,
        total_cart: state.total_cart,
        updateCartAmount: updateCartAmount,
        subtotal: state.subtotal,
        shipping_fee: state.shipping_fee,
        clearCartItem: clearCartItem,
        clearCart: clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };

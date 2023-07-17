import React, { useState, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();
const defaultState = {
  loading: true,
  cartItems: [],
  totalItems: "",
  totalAmount: "",
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getCartItems = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "FETCH_ITEMS", payload: data });
  };
  const clearItems = () => {
    dispatch({ type: "CLR_LIST" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    dispatch({ type: "UPDATE_TOTALCART", payload: id });
    dispatch({ type: "UPDATE_ITEM_PRICE", payload: id });
  };
  const increaseItem = (id) => {
    dispatch({ type: "INC_ITEM", payload: id });
    dispatch({ type: "UPDATE_TOTALCART", payload: id });
    dispatch({ type: "UPDATE_ITEM_PRICE", payload: id });
  };
  const decreaseItem = (id) => {
    dispatch({ type: "DEC_ITEM", payload: id });
    dispatch({ type: "UPDATE_ITEM", payload: id });
    dispatch({ type: "UPDATE_TOTALCART", payload: id });
    dispatch({ type: "UPDATE_ITEM_PRICE", payload: id });
  };
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cartItems: state.cartItems,
        totalItems: state.totalItems,
        totalPrice: state.totalAmount,
        increaseItem: increaseItem,
        decreaseItem: decreaseItem,
        clearItems: clearItems,
        loading: state.loading,
        removeItem: removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };

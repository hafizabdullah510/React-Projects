import React from "react";
export const reducer = (state, action) => {
  if (action.type === "FETCH_ITEMS") {
    return {
      ...state,
      cartItems: action.payload,
      totalItems: action.payload.reduce((total, item) => {
        total += item.amount;
        return total;
      }, 0),
      totalAmount: action.payload.reduce((totalPrice, item) => {
        totalPrice += parseFloat(item.price);
        return totalPrice;
      }, 0),
      loading: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "INC_ITEM") {
    return {
      ...state,
      cartItems: state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      }),
    };
  }
  if (action.type === "UPDATE_TOTALCART") {
    return {
      ...state,
      totalItems: state.cartItems.reduce((total, item) => {
        total += item.amount;
        return total;
      }, 0),
    };
  }
  if (action.type === "UPDATE_ITEM_PRICE") {
    return {
      ...state,
      totalAmount: state.cartItems.reduce((total, item) => {
        total += item.amount * parseFloat(item.price);

        return Math.round(total * 100) / 100;
      }, 0),
    };
  }
  if (action.type === "CLR_LIST") {
    return { ...state, cartItems: [], totalItems: 0, totalAmount: 0 };
  }
  if (action.type === "DEC_ITEM") {
    return {
      ...state,
      cartItems: state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      }),
    };
  }
  if (action.type === "UPDATE_ITEM") {
    return {
      ...state,
      cartItems: state.cartItems.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        } else if (item.id === action.payload && item.amount >= 1) {
          return item;
        }
      }),
    };
  }

  throw new Error("No Matching action type");
};

import React from "react";
import up from "./up.svg";
import data from "./data";
import low from "./low.svg";
import { useGlobalContext } from "../context";
const CartBag = () => {
  const {
    cartItems,
    totalPrice,
    increaseItem,
    decreaseItem,
    clearItems,
    removeItem,
  } = useGlobalContext();
  return (
    <div className="bag-outer-cont">
      <h1>Your Bag</h1>
      {cartItems.length === 0 && (
        <h5 className="empty-cart-text">is currently empty</h5>
      )}
      {cartItems.length > 0 && (
        <div className="bag-cont">
          <div className="items-cont">
            {cartItems.map((item) => {
              const { id, title, amount, img, price } = item;
              return (
                <div className="item">
                  <img className="img" src={img} />
                  <div className="item-info">
                    <h4 className="title">{title}</h4>
                    <h5 className="price">${price}</h5>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(id)}
                    >
                      remove
                    </button>
                  </div>
                  <div className="amount-cont">
                    <img
                      className="up-icon"
                      src={up}
                      onClick={() => increaseItem(id)}
                    />
                    <p>{amount}</p>
                    <img
                      className="low-icon"
                      src={low}
                      onClick={() => decreaseItem(id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="underline"></div>
          <div className="total-cont">
            <h5>Total</h5>
            <h5>${totalPrice}</h5>
          </div>
          <button className="clr-cart-btn" onClick={() => clearItems()}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartBag;

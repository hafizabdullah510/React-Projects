import React from "react";
import { FaMinus, FaPlus, FaDelet } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { currencyFormatter } from "../utils/helpers";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CartMain = () => {
  const {
    cartItems,
    updateCartAmount,
    subtotal,
    shipping_fee,
    clearCartItem,
    clearCart,
  } = useCartContext();

  return (
    <>
      {cartItems.length > 0 ? (
        <section>
          <section className="section-center">
            <div className="cart-con">
              <div className="cart-header-c">
                <h4>Item</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Subtotal</h4>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
              </div>
              <div className="cart-uu"></div>
              {cartItems.map((item) => {
                const { id, img, price, color, amount, name } = item;
                return (
                  <div className="cart-pc" key={id}>
                    <div className="item-pic-c">
                      <img className="cart-img" src={img} alt="cartImg" />
                      <div className="cart-item-ic">
                        <h5 className="item-n">{name}</h5>
                        <div className="item-cc">
                          <p className="item-ct">Color :</p>
                          <div
                            style={{ backgroundColor: color }}
                            className="item-c"
                          ></div>
                        </div>
                        <p className="item-price">
                          {currencyFormatter(price, 100)}
                        </p>
                      </div>
                    </div>
                    <p className="cart-item-price">
                      {currencyFormatter(price, 100)}
                    </p>
                    <div className="item-cartNo-c">
                      <FaMinus
                        className="minus"
                        onClick={() =>
                          updateCartAmount({ todo: "minus", id: id })
                        }
                      />
                      {amount}
                      <FaPlus
                        className="plus"
                        onClick={() =>
                          updateCartAmount({ todo: "plus", id: id })
                        }
                      />
                    </div>
                    <p className="cart-item-subtotal">
                      {currencyFormatter(price * amount, 100)}
                    </p>

                    <div className="del-btn">
                      <MdDelete onClick={() => clearCartItem(id)} />
                    </div>
                  </div>
                );
              })}
              <div className="cart-u"></div>
              <div className="cart-btn-c">
                <Link to="/products">
                  <button className="cnt-shop-btn">Continue Shopping</button>
                </Link>
                <button className="clr-cart-btn" onClick={clearCart}>
                  Clear Shopping Cart
                </button>
              </div>
              <div className="cart-total-c">
                <div className="total-c">
                  <div className="subtotal-c">
                    <span className="total-t">Subtotal :</span>
                    {currencyFormatter(subtotal, 100)}
                  </div>
                  <div className="shipping-c">
                    <span className="total-ship">Shipping Fee :</span>
                    {currencyFormatter(shipping_fee, 100)}
                  </div>
                  <div className="total-u"></div>
                  <div className="order-total-c">
                    <span className="total-order">Order Total :</span>
                    {currencyFormatter(subtotal + shipping_fee, 100)}
                  </div>
                </div>
                <button className="cart-total-btn">Login</button>
              </div>
            </div>
          </section>
        </section>
      ) : (
        <div className="empty-cart-c">
          <h2 className="empty-cart-txt">Your Cart Is Empty</h2>
          <Link to="/products">
            <button className="fill-btn">Fill It</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartMain;

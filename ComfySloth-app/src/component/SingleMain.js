import React from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { useAppContext } from "../context/app_context";
import StarRatings from "react-star-ratings";
import { currencyFormatter } from "../utils/helpers";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useCartContext } from "../context/cart_context";
const SingleMain = () => {
  const {
    single_product,
    loading,
    updateImg,
    selectNewColor,
    updateCartAmount,
  } = useAppContext();
  const { AddToCart } = useCartContext();
  console.log(single_product);
  const {
    name,
    stars,
    reviews,
    price,
    description,
    mainImg,
    id,
    company,
    stock,
    images,
    colors,
    selectedColor,
    cartAmount,
  } = single_product;
  console.log(selectedColor);
  return (
    <section>
      <section className="section-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="single-c">
            <Link to="/products">
              <button className="bck-btn">Back To Products</button>
            </Link>
            <div className="single-product-c">
              <div className="single-img-c">
                <img
                  className="single-main-img"
                  src={mainImg.url}
                  alt="singleMain"
                />
                <div className="small-img-c">
                  {images.map((img) => {
                    const { id, url } = img;
                    return (
                      <img
                        key={id}
                        src={url}
                        className={
                          id === mainImg.id
                            ? "small-img active-img"
                            : "small-img"
                        }
                        onClick={() => updateImg(id)}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="single-info-c">
                <h2 className="single-t">{name}</h2>
                <div className="star-c">
                  <StarRatings
                    rating={stars}
                    starDimension="20px"
                    starRatedColor="orange"
                    starSpacing="5px"
                  />
                  <span className="reviews">({reviews} Customer Views)</span>
                </div>
                <p className="single-price">{currencyFormatter(price, 100)}</p>
                <p className="single-desc">{description}</p>
                <div className="info-c">
                  <h4 className="info-t">Available :</h4>
                  <p className="info-state">
                    {stock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <div className="info-c">
                  <h4 className="info-t">SKU :</h4>
                  <p className="info-state">{id}</p>
                </div>
                <div className="info-c">
                  <h4 className="info-t">Brand :</h4>
                  <p className="info-state">{company}</p>
                </div>
                <div className="single-u"></div>
                {stock > 0 && (
                  <div className="single-colors-c">
                    <h4 className="info-t">Colors :</h4>
                    <div className="single-colcircle-c">
                      {colors.map((col, index) => {
                        return (
                          <div
                            className="single-color"
                            style={{ backgroundColor: col }}
                            key={index}
                            onClick={() => selectNewColor(col)}
                          >
                            {col === selectedColor && <FaCheck />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {stock > 0 && (
                  <div className="single-cartNo-c">
                    <FaMinus
                      className="minus"
                      onClick={() => updateCartAmount("minus")}
                    />
                    {cartAmount}
                    <FaPlus
                      className="plus"
                      onClick={() => updateCartAmount("plus")}
                    />
                  </div>
                )}
                {stock > 0 && (
                  <Link to="/cart">
                    <button
                      className="addcart-btn"
                      onClick={() => AddToCart(single_product)}
                    >
                      Add to Cart
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default SingleMain;

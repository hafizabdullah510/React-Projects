import React from "react";
import { FaSearch } from "react-icons/fa";
import { currencyFormatter } from "../utils/helpers";
import { useAppContext } from "../context/app_context";
import { Link } from "react-router-dom";
import Loading from "./Loading";
const FeaturedProducts = () => {
  const { featured_products, setSearchedId, featuredLoading } = useAppContext();
  return (
    <section className="featured-c">
      <section className="section-center featured-section">
        <div className="featured-header">
          <h1 className="featured-heading">Featured Products</h1>
          <div className="featured-u"></div>
        </div>
        {featuredLoading ? (
          <Loading />
        ) : (
          <div className="featured-products-c">
            {featured_products.map((product) => {
              const { id, image, name, price } = product;
              return (
                <div className="featured-product" key={id}>
                  <div className="featured-img-c">
                    <img
                      className="featured-img"
                      src={image}
                      alt="featured-product"
                    />
                    <div className="search">
                      <Link to={`/product/${id}`}>
                        <FaSearch
                          className="search-icon"
                          onClick={() => setSearchedId(id)}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="featured-info">
                    <h3 className="featured-title">{name}</h3>
                    <p className="featured-price">
                      {currencyFormatter(price, 100)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="featured-btn-c">
          <Link to="/products">
            <button className="featured-btn">All Products</button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default FeaturedProducts;

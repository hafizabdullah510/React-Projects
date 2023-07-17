import React from "react";
import { BsGridFill, BsList } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { currencyFormatter } from "../utils/helpers";
import { useGlobalContext } from "../context/filter_context";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/app_context";
const FilteredProducts = () => {
  const { filtered_products, setView, grid, sort, updateSort } =
    useGlobalContext();
  const { setSearchedId } = useAppContext();
  return (
    <div className="filtered-c">
      <div className="view-c">
        <div className="view-icon-c">
          <BsGridFill
            className={grid ? "view-icon active-view" : "view-icon"}
            onClick={() => setView("grid")}
          />
          <BsList
            className={!grid ? "view-icon active-view" : "view-icon"}
            onClick={() => setView("list")}
          />
        </div>
        <p className="total-p">
          {`${filtered_products.length}`} Products Found
        </p>
        <div className="view-underline"></div>

        <div className="sort-c">
          <h2 className="sort-txt">Sort By</h2>
          <select
            name="sort"
            className="sort-select"
            value={sort}
            onChange={updateSort}
          >
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Name (A-Z)</option>
            <option value="z-a">Name (Z-A)</option>
          </select>
        </div>
      </div>
      {filtered_products.length > 0 ? (
        <div className={grid ? "products-c" : "list-c"}>
          {filtered_products.map((product) => {
            const { id, image, name, price, description } = product;
            return (
              <div
                className={
                  grid ? "featured-product" : "featured-product list-product"
                }
                key={id}
              >
                <div className={grid ? "featured-img-c" : "list-img-c"}>
                  <img
                    className={
                      grid
                        ? "featured-img  grid-img"
                        : "featured-img  list-img "
                    }
                    src={image}
                    alt="featured-product"
                  />
                  {grid && (
                    <div className="search">
                      <Link to={`/product/${id}`}>
                        <FaSearch
                          className="search-icon"
                          onClick={() => setSearchedId(id)}
                        />
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className={grid ? "featured-info" : "featured-info list-info"}
                >
                  <h3
                    className={
                      grid ? "featured-title" : "featured-title list-title"
                    }
                  >
                    {name}
                  </h3>
                  <p
                    className={
                      grid ? "featured-price" : "featured-price list-price"
                    }
                  >
                    {currencyFormatter(price, 100)}
                  </p>
                  {!grid && (
                    <p className="list-desc">
                      {description.substring(0, 150)}...
                    </p>
                  )}
                  {!grid && (
                    <Link to={`/product/${id}`}>
                      <button
                        className="list-btn"
                        onClick={() => setSearchedId(id)}
                      >
                        Details
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h5 className="zero-products">
          Sorry, no products matched your search.
        </h5>
      )}
    </div>
  );
};

export default FilteredProducts;

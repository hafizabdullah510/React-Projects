import React from "react";
import { FaCheck } from "react-icons/fa";
import { getUniqueValues } from "../utils/helpers";
import { useGlobalContext } from "../context/filter_context";
import { currencyFormatter } from "../utils/helpers";
const Filter = () => {
  const {
    products,
    shipping,
    updateFilter,
    submitHandler,
    company,
    min,
    max,
    price,
    category,
    color,
    clearFilter,
  } = useGlobalContext();
  const colors = getUniqueValues(products, "colors");
  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  return (
    <div className="sticky-c">
      <form className="form" onSubmit={submitHandler}>
        <input
          placeholder="Search"
          type="text"
          className="search-input"
          name="input"
          onChange={updateFilter}
        />
        <div className="cat-c">
          <h4 className="filter-heading">Category</h4>
          <div className="cat-btn-c">
            {categories.map((cat, index) => {
              return (
                <button
                  key={index}
                  className={cat === category ? "btn-type cat-u" : "btn-type"}
                  name="category"
                  onClick={updateFilter}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
        <div className="comp-c">
          <h4 className="filter-heading">Company</h4>
          <select
            name="company"
            value={company}
            id="company"
            className="slt-box"
            onChange={updateFilter}
          >
            {companies.map((company, index) => {
              return (
                <option key={index} value={`${company}`}>
                  {company}
                </option>
              );
            })}
          </select>
        </div>
        <div className="colors-c">
          <h4 className="filter-heading">Colors</h4>
          <div className="colors-circle-c">
            {colors.map((col, index) => {
              if (col === "all") {
                return (
                  <button
                    className={col === color ? "btn-type cat-u" : "btn-type"}
                    key={index}
                    name="color"
                    data-color="all"
                    onClick={updateFilter}
                  >
                    {col}
                  </button>
                );
              } else {
                return (
                  <button
                    key={index}
                    className="color-box"
                    style={{ backgroundColor: col }}
                    name="color"
                    data-color={col}
                    onClick={updateFilter}
                  >
                    {col === color && <FaCheck className="fa-check" />}
                  </button>
                );
              }
            })}
          </div>
        </div>
        <div className="price-c">
          <h4 className="filter-heading">Price</h4>
          <p className="price">{`${currencyFormatter(price, 100)}`}</p>
          <input
            type="range"
            min={min}
            max={max}
            value={price}
            className="slider"
            id="myRange"
            name="price"
            onChange={updateFilter}
          />
        </div>
        <div className="shipping-c">
          <h5 className="free-shipping">Free Shipping</h5>
          <input
            type="checkbox"
            checked={shipping}
            name="shipping"
            onChange={updateFilter}
          />
        </div>
        <button className="clr-filter-btn" onClick={clearFilter}>
          Clear Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;

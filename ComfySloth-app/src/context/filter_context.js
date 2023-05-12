import React, { useContext, useEffect, useReducer, useState } from "react";
import { products_url } from "../utils/utils";
import { reducer } from "../reducers/filter_reducer";
import { single_product_url } from "../utils/utils";
const AppContext = React.createContext();
const defaultState = {
  products: [],
  filtered_products: [],
  sort: "lowest",
  grid_view: true,
  filters: {
    input: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 3099,
    max_price: 0,
    price: 309999,
    shipping: false,
  },
};
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getProducts = async () => {
    const resp = await fetch(products_url);
    const data = await resp.json();
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "input") {
      value = e.target.value;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = parseInt(e.target.value);
    }
    if (name === "shipping") {
      value = !state.filters.shipping;
    }
    console.log(value, name);
    dispatch({ type: "APPLY_PROPERTIES", payload: { value, name } });

    dispatch({ type: "FILTER_PRODUCTS", payload: { value, name } });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const clearFilter = () => {
    dispatch({ type: "CLR_FILTER", payload: state.products });
  };

  const setView = (view) => {
    dispatch({ type: "SET_VIEW", payload: view });
  };
  const updateSort = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "SORT", payload: { name, value } });
  };
  console.log(state.filters);
  console.log(state.filtered_products);
  return (
    <AppContext.Provider
      value={{
        products: state.products,
        updateFilter: updateFilter,
        submitHandler: submitHandler,
        company: state.filters.company,
        min: state.filters.min_price,
        max: state.filters.max_price,
        price: state.filters.price,
        shipping: state.filters.shipping,
        clearFilter: clearFilter,
        category: state.filters.category,
        color: state.filters.color,
        filtered_products: state.filtered_products,
        setView: setView,
        grid: state.grid_view,
        lowest: state.sort,
        updateSort: updateSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, FilterProvider };

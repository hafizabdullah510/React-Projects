import React, { useContext, useEffect, useReducer, useState } from "react";
import { products_url } from "../utils/utils";
import { reducer } from "../reducers/app_reducer";
import { single_product_url } from "../utils/utils";
const AppContext = React.createContext();
const defaultState = {
  products: [],
  featured_products: [],
  single_product: {
    name: "",
    stars: 0,
    reviews: 0,
    price: 0,
    description: "",
    id: "",
    company: "",
    stock: 0,
    images: [],
    colors: [],
    mainImg: { url: "", id: "" },
    selectedColor: "",
    cartAmount: 1,
  },
  isLoading: false,
  isFeaturedLoading: false,
};
const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [searchedId, setSearchedId] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  console.log(state.single_product.mainImg);

  const getProducts = async () => {
    dispatch({ type: "SET_FEATURED_LOADING" });
    const resp = await fetch(products_url);
    const data = await resp.json();
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };
  const getSingleProduct = async () => {
    dispatch({ type: "SET_LOADING" });
    const resp = await fetch(`${single_product_url}${searchedId}`);
    const data = await resp.json();

    dispatch({ type: "GET_SINGLE_PRODUCT", payload: data });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getSingleProduct();
  }, [searchedId]);

  const updateImg = (id) => {
    dispatch({ type: "UPDATE_IMG", payload: id });
  };
  const selectNewColor = (color) => {
    dispatch({ type: "UPDATE_COLOR", payload: color });
  };
  const updateCartAmount = (changeType) => {
    dispatch({ type: "UPDATE_CART_AMOUNT", payload: changeType });
  };
  return (
    <AppContext.Provider
      value={{
        isSidebar: isSidebar,
        setIsSidebar: setIsSidebar,
        products: state.products,
        featured_products: state.featured_products,
        single_product: state.single_product,
        setSearchedId: setSearchedId,
        loading: state.isLoading,
        featuredLoading: state.isFeaturedLoading,
        updateImg: updateImg,
        selectNewColor: selectNewColor,
        updateCartAmount: updateCartAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

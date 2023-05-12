import React, { useState, useEffect, useContext, useRef } from "react";
import { useFetch } from "./useFetch";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems(`${url}${searchItem}`);
  }, [searchItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const getItems = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setCocktails(data.drinks);
    setLoading(false);
  };
  useEffect(() => {
    getItems(url);
  }, [url]);
  return (
    <AppContext.Provider
      value={{
        cocktails: cocktails,
        handleSubmit: handleSubmit,
        setSearchItem: setSearchItem,
        loading: loading,
        setLoading: setLoading,
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

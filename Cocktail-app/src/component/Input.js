import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const Input = () => {
  const { setSearchItem, handleSubmit } = useGlobalContext();
  
  return (
    <div className="input-outer-cont">
      <form className="input-cont" onSubmit={handleSubmit}>
        <label htmlFor="inputItem" className="input-title">
          Search Your Favorite Cocktail
        </label>
        <input
          autoFocus
          className="input"
          id="inputItem"
          name="searchItem"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;

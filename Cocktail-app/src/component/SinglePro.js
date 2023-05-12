import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
const SinglePro = ({ id }) => {
  const { cocktails, loading, setLoading } = useGlobalContext();
  const [singleItem, setSingleItem] = useState("");

  useEffect(() => {
    setLoading(true);
    let newItem = cocktails.find((item) => item.idDrink === id);
    setSingleItem(newItem);
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="single-outer-cont">
          <Link to="/" className="bck-btn">
            Back Home
          </Link>
          <h2 className="single-title">{singleItem.strDrink}</h2>
          <div className="single-inner-cont">
            <img className="single-img" src={singleItem.strDrinkThumb} />
            <div className="single-info-cont">
              <div className="cocktail-name">
                <div className="label">Name:</div>
                {singleItem.strDrink}
              </div>
              <div className="cocktail-category">
                <div className="label">Category:</div>
                {singleItem.strCategory}
              </div>
              <div className="cocktail-info">
                <div className="label">Info:</div>
                {singleItem.strAlcoholic}
              </div>
              <div className="cocktail-glass">
                <div className="label">Glass:</div>
                {singleItem.strGlass}
              </div>
              <div className="cocktail-inst">
                <div className="label">Instructions:</div>
                {singleItem.strInstructions}
              </div>
              <div className="cocktail-ing">
                <div className="label">Ingredients:</div>
                {singleItem.strIngredient1} {singleItem.strIngredient2}
                {singleItem.strIngredient3}
                Juice Grenadine
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePro;

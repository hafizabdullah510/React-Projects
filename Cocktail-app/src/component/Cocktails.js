import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Error from "./Error";
const Cocktails = () => {
  const { cocktails, loading } = useGlobalContext();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="cocktails-outer-cont">
          {!cocktails && (
            <div className="no-cocktails">
              No Cocktails Matched Your Search Criteria
            </div>
          )}
          <div
            className={
              cocktails ? "cocktails-inner-cont" : "hide-cocktail-cont"
            }
          >
            {cocktails && <h2>Cocktails</h2>}
            <div className="cocktail-items-cont">
              {cocktails &&
                cocktails.map((cocktail) => {
                  const {
                    idDrink,
                    strAlcoholic,
                    strDrink,
                    strGlass,
                    strDrinkThumb,
                  } = cocktail;
                  return (
                    <div className="cocktail-item-cont" key={idDrink}>
                      <div className="cocktail-img-cont">
                        <img className="cocktail-img" src={strDrinkThumb} />
                      </div>
                      <div className="cocktail-info-cont">
                        <h1 className="cocktail-title">{strDrink}</h1>
                        <h3 className="cocktail-subtitle">{strGlass}</h3>
                        <h5 className="cocktail-type">{strAlcoholic}</h5>
                        <Link
                          to={`/cocktail/${idDrink}`}
                          className="details-btn"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cocktails;

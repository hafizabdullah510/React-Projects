import React from "react";
import { Link } from "react-router-dom";

const Navigator = ({ currentPage, secPage }) => {
  return (
    <>
      <section className="navig-sec">
        <section className="section-center">
          <div className="navig-c">
            <Link to="/" className="home-navig">
              <h4>Home</h4>
            </Link>
            {secPage && <span className="separator"> / </span>}
            {secPage && (
              <Link to="/products" className="sec-page">
                <h4>{secPage}</h4>
              </Link>
            )}
            <span className="separator"> / </span>
            <h4 className="current-page">{currentPage}</h4>
          </div>
        </section>
      </section>
    </>
  );
};

export default Navigator;

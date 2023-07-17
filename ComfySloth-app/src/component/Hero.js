import React from "react";
import hero1 from "../../src/utils/Home Icons/hero-home.jpeg";
import hero2 from "../../src/utils/Home Icons/hero-front.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section>
      <section className="section-center">
        <div className="hero-c">
          <div className="left-section">
            <h1 className="hero-title">
              Design Your
              <br /> Comfort Zone
            </h1>
            <p className="hero-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <Link to="/products">
              <button className="shop-btn">Shop Now</button>
            </Link>
          </div>
          <div className="right-section">
            <div className="hero-img-c">
              <img className="hero-img" src={hero1} />
              <div className="hero-front-img">
                <img src={hero2} />
              </div>
              <div className="brown-c"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;

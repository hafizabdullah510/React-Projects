import React from "react";
import { useState } from "react";
const Tour = ({ id, name, price, info, image, filterTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-cont">
      <div className="img-cont">
        <img className="img" src={image} />
      </div>
      <div className="info-cont">
        <div className="tour-name">
          <h3>{name}</h3>
          <div className="tour-price">${price}</div>
        </div>
        <div className="tour-desc">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="read-more-btn"
            type="button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "Read more"}
          </button>
        </div>
        <div className="btn-cont">
          <button
            type="button"
            className="not-interested-btn"
            onClick={() => filterTours(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;

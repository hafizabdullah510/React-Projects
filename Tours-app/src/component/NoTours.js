import React from "react";

const NoTours = ({ refreshTours }) => {
  return (
    <div className="zero-cont">
      <h2>No Tours left</h2>
      <button
        type="button"
        className="refresh-btn"
        onClick={() => refreshTours()}
      >
        Refresh
      </button>
    </div>
  );
};

export default NoTours;

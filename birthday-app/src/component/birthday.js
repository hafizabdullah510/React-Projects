import React from "react";

function Birthday(props) {
  const { name, image, age } = props;
  return (
    <div className="birthday-cont">
      <div className="pic-cont">
        <img className="pic" src={image} />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
}

export default Birthday;

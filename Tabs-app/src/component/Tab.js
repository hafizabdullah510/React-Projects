import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const tab = ({ title, dates, duties, company }) => {
  return (
    <div className="tab-cont">
      <div
        className="
        dev-cont"
      >
        <h3 className="dev-job">{title}</h3>
        <div className="dev-comp">{company}</div>
        <p className="comp-date">{dates}</p>
      </div>
      <div className="skills-cont">
        {duties.map((duty) => {
          return (
            <div className="skill">
              <FaAngleDoubleRight className="double-angle" />
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
      <button className="info-btn">MORE INFO</button>
    </div>
  );
};

export default tab;

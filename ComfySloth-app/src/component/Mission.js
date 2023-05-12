import React from "react";
import { services } from "../utils/utils";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

const Mission = () => {
  return (
    <section className="mission-c">
      <section className="section-center mission-center">
        <div className="ms-c">
          <div className="comp-qc">
            <h2 className="comp-q">
              Custom Furniture
              <br /> Built Only For You
            </h2>
            <p className="comp-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </div>
          <div className="mvh-c">
            {services.map((service) => {
              const { id, icon, title, text } = service;
              return (
                <div className="services-c" key={id}>
                  <div className="service-img-c">{icon}</div>
                  <h3 className="service-title">{title}</h3>
                  <p className="service-desc">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Mission;

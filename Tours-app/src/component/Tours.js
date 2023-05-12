import React from "react";
import Tour from "./Tour";
import Loading from "./Loading";
import Error from "./Error";
import NoTours from "./NoTours";
import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    const respose = await fetch(url);
    const data = await respose.json();
    setTours(data);
    setIsLoading(false);
  };
  const filterTours = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  if (tours.length === 0) {
    return <NoTours refreshTours={getTours} />;
  }
  return (
    <section className="outer-cont">
      <div className="cont">
        <h2>Our Tours</h2>
        <div className="underline"></div>
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <Tour
              key={id}
              name={name}
              info={info}
              image={image}
              price={price}
              filterTours={() => filterTours(id)}
              id={id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;

import React, { useEffect, useState } from "react";
import Tab from "./component/Tab";
import Loading from "./component/Loading";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [val, setVal] = useState(0);
  const getPeople = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getPeople();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="cont">
      <div className="head-cont">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="inner-cont">
        <div className="name-cont">
          {people.map((comp, index) => {
            const { company } = comp;
            return (
              <div className="company-cont" onClick={() => setVal(index)}>
                <h3
                  className={`comp-name  ${val === index && "selected-comp"}`}
                >
                  {company}
                </h3>
                <div
                  className={`comp-underline  ${
                    val === index && "selected-underline"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
        {people.map((company, index) => {
          if (index === val) {
            return <Tab key={company.id} {...company} />;
          }
        })}
      </div>
    </section>
  );
}

export default App;

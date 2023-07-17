import Birthday from "./component/birthday";
import data from "./data.js";
import { useState } from "react";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="cont">
      <div className="inner-cont">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return <Birthday key={person.id} {...person} />;
        })}
        <button className="clr-btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;

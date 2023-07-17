import { useEffect, useRef, useState } from "react";
import logo from "./component/logo.svg";
import { social } from "./component/data";
import { FaBars } from "react-icons/fa";
import { links } from "./component/data";

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const refToggleCont = useRef(null);
  const refToggleList = useRef(null);

  useEffect(() => {
    const listHeight = refToggleList.current.getBoundingClientRect().height;

    if (showLinks) {
      refToggleCont.current.style.height = `${listHeight}px`;
    } else {
      refToggleCont.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <>
      <div className="outer-cont">
        <div className="inner-cont">
          <img className="logo" src={logo} />
          <div className="links-cont">
            <ul className="links-list">
              {links.map((link) => {
                const { id, text } = link;
                return <li key={id}>{text}</li>;
              })}
            </ul>
          </div>
          <div className="social-container">
            <ul className="social-list">
              {social.map((item) => {
                const { id, icon } = item;
                return <li key={id}>{icon}</li>;
              })}
            </ul>
          </div>
          <FaBars
            className="fa-bars"
            onClick={() => setShowLinks(!showLinks)}
          />
        </div>
      </div>

      <div
        className={showLinks ? "toggle-cont show-links" : "toggle-cont"}
        ref={refToggleCont}
      >
        <ul
          className={showLinks ? "toggle-list" : " hide-list"}
          ref={refToggleList}
        >
          {links.map((link) => {
            const { id, text } = link;
            return <li key={id}>{text}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

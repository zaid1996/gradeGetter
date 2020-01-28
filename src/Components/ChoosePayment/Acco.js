import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Acco.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("acco__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "activeo" : "");
    setHeightState(
      setActive === "activeo" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "activeo" ? "acco__icon" : "acco__icon rotate"
    );
  }

  return (
    <div className="acco__section">
      <button className={`acco ${setActive}`} onClick={toggleAccordion}>
        <p className="acco__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="acco__content"
      >
        <div
          className="acco__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;

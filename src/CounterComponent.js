import React from "react";
import "./counterComponent.css";

const CounterComponent = (props) => {
  return (
    <div className="main">
      <h1>Counter Using React</h1>
      <p>Your Current Count is : {props.num}</p>
      <div className="line"></div>
    </div>
  );
};

export default CounterComponent;

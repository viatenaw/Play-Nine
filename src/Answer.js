import React from "react";
import "./App.css";

const Answer = props => {
  return (
    <div className="answer col-5">
      {props.selectedNumbers.map((number, i) => (
        <span key={i} onClick={() => props.unselectNumber(number)}>
          {number}
        </span>
      ))}
    </div>
  );
};

export default Answer;

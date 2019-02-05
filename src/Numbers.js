import React from "react";
import { _ } from "underscore";
import "./App.css";

const Numbers = props => {
  Numbers.list = _.range(1, 10);
  const numberClassName = number => {
    if (props.usedNumbers.indexOf(number) >= 0) return "used";

    if (props.selectedNumbers.indexOf(number) >= 0) return "selected";
  };
  return (
    <div className="col-12 card text-center ">
      <div>
        {Numbers.list.map((number, i) => (
          <span
            key={i}
            className={numberClassName(number)}
            disabled={props.usedNumbers.indexOf(number) >= 0}
            onClick={() => props.selectNumber(number)}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Numbers;

import React from "react";

const Rules = () => {
  return (
    <div>
      <br />
      <ul className="list-group">
        <li className="list-group-item list-group-item-info">
          Click on the number equal to the number of stars or click on numbers
          that add up to the number of stars, then press the = button
        </li>
        <li className="list-group-item list-group-item-success">
          Exhaust all the numbers to win the game
        </li>
        <li className="list-group-item list-group-item-danger">
          You lose if you failed to exhaust all the numbers
        </li>
        <li className="list-group-item list-group-item-warning">
          You have 5 redraws incase you can't match the number of stars with the
          available numbers
        </li>
      </ul>
    </div>
  );
};

export default Rules;

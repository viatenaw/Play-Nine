import React from "react";
import { _ } from "underscore";
//import "./App.css";

const Stars = props => {
  return (
    <div className="col-5">
      {_.range(props.numberOfStars).map(i => (
        <i key={i} className="fa fa-star" />
      ))}
    </div>
  );
};

export default Stars;

import React, { useState } from "react";
import Ratings from "react-ratings-declarative";

import "./styles.css"

export default function Rating({ rating }) {
  return (
    <div className="ratings">
      <Ratings 
        rating={rating}
        widgetDimensions="15px"
        widgetSpacings="2px"
      >
        <Ratings.Widget widgetRatedColor="orange" />
        <Ratings.Widget widgetRatedColor="orange" />
        <Ratings.Widget widgetRatedColor="orange" />
        <Ratings.Widget widgetRatedColor="orange" />
        <Ratings.Widget widgetRatedColor="orange" />
      </Ratings>
      <p>{Number(rating).toFixed(1)}</p>
    </div>
  );
}
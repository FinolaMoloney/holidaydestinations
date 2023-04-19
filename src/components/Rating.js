import React from "react";

function Rating(props) {
  const { starRating } = props;
  const stars = "*".repeat(starRating);

  return <div>{stars}</div>;
}

export default Rating;
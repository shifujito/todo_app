import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

type StarProps = {
  selected: boolean;
};

type StarRatingProps = {
  totalStars: number;
};

const Star: React.FC<StarProps> = ({ selected }) => {
  return <FaStar color={selected ? "red" : "grey"} />;
};

const StarRaring: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [selectedStars] = useState(3);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
    </>
  );
};

export default StarRaring;

import React from "react";
import { useState } from "react";
import Star from "./Star";

type StarRatingProps = {
  totalStars: number;
};

const StarRaring: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(selectedStars + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} Stars
      </p>
    </>
  );
};

export default StarRaring;

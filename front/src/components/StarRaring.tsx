import React from "react";
import { useState } from "react";
import Star from "./Star";

type StarRatingProps = {
  totalStars: number;
  style: any;
};

const StarRaring: React.FC<StarRatingProps> = ({ style, totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={style}>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} Stars
      </p>
    </div>
  );
};

export default StarRaring;

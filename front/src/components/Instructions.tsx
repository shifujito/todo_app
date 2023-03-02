import React from "react";

type InstructionsProps = {
  title: string;
  steps: string[];
};

const Instructions: React.FC<InstructionsProps> = ({ title, steps }) => {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </section>
  );
};

export default Instructions;

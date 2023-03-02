import { useState } from "react";
import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StarRating from "./components/StarRaring";

function App() {
  return <StarRating style={{ backgroundColor: "lightblue" }} totalStars={5} />;
}

export default App;

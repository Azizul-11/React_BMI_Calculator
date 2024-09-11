import React, { useMemo, useState } from "react";
import "./App.css"

const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(40);
  
  
  // function calculateBmi() {
  //   const calculatedBmi = (weight / (height / 100) ** 2).toFixed(2);
  //   setBmi(calculatedBmi);
  // }

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  const output=useMemo(()=>{
    const calculatedBmi = (weight / (height / 100) ** 2).toFixed(1);
    return calculatedBmi;
  },[weight,height])

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weigh: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          onChange={onHeightChange}
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;

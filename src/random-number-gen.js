import React, { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1); // Generates a number between 1 and 100
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random Number Generator</h1>
      <button onClick={generateNumber} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Generate Random Number
      </button>
      {randomNumber !== null && <h2>Your Number: {randomNumber}</h2>}
    </div>
  );
}

export default App;

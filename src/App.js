import React, { useState } from "react";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    if (value === "" || isNaN(value)) {
      setFahrenheit("");
      return;
    }

    const f = (value * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === "" || isNaN(value)) {
      setCelsius("");
      return;
    }

    const c = ((value - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Конвертер температур</h1>

      <div className="block">
        <label>Градусы °C</label>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Введите °C"
        />
      </div>

      <div className="block">
        <label>Градусы °F</label>
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Введите °F"
        />
      </div>
    </div>
  );
}

export default App;

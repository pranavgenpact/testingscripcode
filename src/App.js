import React, { useState } from 'react';
import './App.css';

function App() {
  const [sliderValue, setSliderValue] = useState(50);
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="app">
      <h1>React Options Example</h1>
      <button className="button">Button</button>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleRadioChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleRadioChange}
          />
          Option 2
        </label>
      </div>
      <select
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
        className="dropdown"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default App;

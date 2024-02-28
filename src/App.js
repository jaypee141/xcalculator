import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import * as math from "mathjs";

function App() {
  const [number1, setNumber] = useState('');
  const [output, setOutput] = useState(null);

  const clickHandle = (e) => {
    setNumber(number1 + e.target.value);
  };

  const clickHandleEqual = () => {
    if (number1) {
      try {
        const result = math.evaluate(number1);
        setOutput(result.toString());
      } catch (error) {
        setOutput("Error");
      }
    } else {
      setOutput("Error");
    }
  };
  const handleClear = () => {
    setOutput(null);
    setNumber('');
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      {/* Updated class name here */}
      {/* <h1 style={{ display: "block" }}>{output}</h1> */}
      <div>
        {/* <input type="text" value={input} className="calculator-input" /> */}
        <input type="text" value={number1} className='input' />

        <p>{output}</p>
        <div >
          <button
            type="button"
            className="btns"
            value="7"
            // className="but"
            onClick={clickHandle}
          >7</button>
          <button
            type="button"
            className="btns"
            value="8"
            onClick={clickHandle}
          >8</button>
          <button
            type="button"
            className="btns"
            value="9"
            onClick={clickHandle}
          >9</button>
          <button
            type="button"
            className="btns"
            value="+"
            onClick={clickHandle}
          >+</button> <br/>
          <button
            type="button"
            className="btns"
            value="4"
            onClick={clickHandle}
          >4</button>
          <button
            type="button"
            className="btns"
            value="5"
            onClick={clickHandle}
          >5</button>
          <button
            type="button"
            className="btns"
            value="6"
            onClick={clickHandle}
          >6</button>
          <button
            type="button"
            className="btns"
            value="-"
            onClick={clickHandle}
          >-</button><br/>
          <button
            type="button"
            className="btns"
            value="1"
            onClick={clickHandle}
          >1</button>
          <button
            type="button"
            className="btns"
            value="2"
            onClick={clickHandle}
          >2</button>
          <button
            type="button"
            className="btns"
            value="3"
            onClick={clickHandle}
          >3</button>
          <button
            type="button"
            className="btns"
            value="*"
            onClick={clickHandle}
          >*</button><br />
          <button
            type="button"
            className="btns"
            value="C"
            onClick={handleClear}
          >C</button>
          <button
            type="button"
            className="btns"
            value="0"
            onClick={clickHandle}
          >0</button>
          <button
            type="button"
            className="btns"
            value="="
            onClick={clickHandleEqual}
          >=</button>
          <button
            type="button"
            className="btns"
            value="/"
            onClick={clickHandle}
          >/</button>
      </div>
    </div>
    </div>
  );
}

export default App;

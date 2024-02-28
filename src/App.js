import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [number1, setNumber] = useState('');
  const [output, setOutput] = useState(null);

  const clickHandle = (e) => {
    setNumber(number1 + e.target.value);
  };

  const clickHandleEqual = () => {
    if (number1) {
      setOutput(eval(number1).toString());
    } else {
      setOutput("Error");
    }
  };

  const clearData = () => {
    setOutput(null);
    setNumber('');
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      {/* Updated class name here */}
      <input type="text" value={number1} className='input' />
      <h1 style={{ display: "block" }}>{output}</h1>
      <br />
      {/* Updated class names here */}
      <input type="button" value="7" className='button' onClick={clickHandle} />
      <input type="button" value="8" className='button' onClick={clickHandle} />
      <input type="button" value="9" className='button' onClick={clickHandle} />
      <input type="button" value="+" className='button' onClick={clickHandle} />
      <br />
      <input type="button" value="4" className='button' onClick={clickHandle} />
      <input type="button" value="5" className='button' onClick={clickHandle} />
      <input type="button" value="6" className='button' onClick={clickHandle} />
      <input type="button" value="-" className='button' onClick={clickHandle} />
      <br />
      <input type="button" value="1" className='button' onClick={clickHandle} />
      <input type="button" value="2" className='button' onClick={clickHandle} />
      <input type="button" value="3" className='button' onClick={clickHandle} />
      <input type="button" value="*" className='button' onClick={clickHandle} />
      <br />
      <input type="button" value="C" className='buttonC' onClick={clearData} />
      <input type="button" value="0" className='button' onClick={clickHandle} />
      {/* Updated class name here */}
      <input type="button" value="=" className='buttonEqual' onClick={clickHandleEqual} />
      <input type="button" value="/" className='button' onClick={clickHandle} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const[number1, getNumber] = useState('');
  const [output, setOutput] = useState(null);
  // const [stat, setStat] =useState(false);
  
  const clickHandle = (e) => {
    // setStat(false);
    getNumber(number1 + e.target.value);

  }
  console.log("hiiiiiiii", number1);
  const clickHandleEqual = () => {
    // setStat(true)
    // console.log("njjnnn", parseFloat(number1))
    if(number1){
    setOutput(eval(number1).toString());
    }else{
      setOutput("Error");
    }
  }

  const callData = (() =>{
    setOutput(null);
    getNumber(' ');  
  }
  )
   
 


  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={number1} className='inpu'></input>
      <h1 style={{display: "block"}}>{output}</h1>
      <br/>
      <input type="button" value="7" className='butto' onClick={clickHandle} />
      <input type="button" value="8" className='butto'onClick={clickHandle} />
      <input type="button" value="9" className='butto' onClick={clickHandle} />
      <input type="button" value="+" className='butto' onClick={clickHandle} />
      <br/>
      <input type="button" value="4" className='butto' onClick={clickHandle} />
      <input type="button" value="5" className='butto' onClick={clickHandle} />
      <input type="button" value="6" className='butto' onClick={clickHandle} />
      <input type="button" value="-" className='butto' onClick={clickHandle} />
      <br/>
      <input type="button" value="1" className='butto' onClick={clickHandle} />
      <input type="button" value="2" className='butto' onClick={clickHandle} />
      <input type="button" value="3" className='butto' onClick={clickHandle} />
      <input type="button" value="*" className='butto' onClick={clickHandle} />
      <br/>
      <input type="button" value="C" className='buttoC' onClick={callData} />
      <input type="button" value="0" className='butto' onClick={clickHandle} />
      <input type="button" value="=" className='buttoEqual' onClick={clickHandleEqual} />
      <input type="button" value="/" className='butto' onClick={clickHandle} />


    </div>
  );
}

export default App;

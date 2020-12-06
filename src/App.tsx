import React, { useState } from 'react';
import './App.css';
import 'flexboxgrid';
import { ChoseNumber } from './components/inputNumber/inputNumber';
import { Select } from './components/inputNumber/select';


const App = () => {
  const [inputValueFirst, setInputValueFirst] = useState('');
  const [inputValueSecond, setInputValueSecond] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState(0);

  const inputHandlerFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueFirst(e.target.value);
  };
  const inputHandlerSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueSecond(e.target.value);
  };

  const sletctHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  let res = 0;
  const calculationHandler = () => {
    // eslint-disable-next-line radix
    const a = parseInt(inputValueFirst);
    // eslint-disable-next-line radix
    const b: number = parseInt(inputValueSecond);

    if (selectedOption === '+') {
      res = a + b;
    } else if (selectedOption === '-') {
      res = a - b;
    } else if (selectedOption === '*') {
      res = a * b;
    } else if (selectedOption === '/') {
      res = a / b;
    }
    setResult(res);
  };

  return (
    <div>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="wrapper">
              <ChoseNumber
                inputValue={inputValueFirst}
                inputHandler={(e) => inputHandlerFirst(e)}
              />
              <Select
                selectHandler={(e) => sletctHandler(e)}
                value={selectedOption}
              />
              <ChoseNumber
                inputValue={inputValueSecond}
                inputHandler={(e) => inputHandlerSecond(e)}
              />
              <button
                type='button'
                onClick={() => calculationHandler()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-6">
            <h1>Result: {result}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

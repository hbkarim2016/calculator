import ResultArea from './components/ResultArea.js';
import ResetButton from './components/ResetButton.js';
import MultipliedButton from './components/MultipliedButton.js';
import MinusButton from './components/MinusButton.js';
import PlusButton from './components/PlusButton.js';
import DividedButton from './components/DividedButton.js';
import NumbersButtons from './components/NumbersButtons.js';
import EqualButton from './components/EqualButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { close_loading } from './redux/reducers/CalcSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const {loading} = useSelector( (state => state.calculator) ); 
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      setTimeout(()=>{
        dispatch( close_loading() );
      },3500)
    },[]
  )
  return (
    <>
    {loading && 
      <div className='loading-page'>
          <div className='loading-logo'>
            <span className='calc-icon'><FontAwesomeIcon icon={faCalculator} /></span>
            <h1>Ca<span>l</span>cu<span>l</span>ator</h1>
          </div>   
      </div>
    }
      <div className='container'>
        <h1 className='header'>Calculator</h1>
        <div className="calculator">
          <span className='calc-icon'><FontAwesomeIcon icon={faCalculator} /></span>
          <h1>Ca<span>l</span>cu<span>l</span>ator</h1>
          <div className="calc-content">
            <ResultArea />
            <ResetButton />
          </div>
          <div className="calc-control">
            <MultipliedButton />
            <MinusButton />
            <DividedButton />
            <PlusButton />
            <NumbersButtons />
            <EqualButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

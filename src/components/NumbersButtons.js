import { useDispatch } from 'react-redux';
import { handleClick, backspace } from "../redux/reducers/CalcSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
const NumbersButtons = () => {
    
    const dispatch = useDispatch();
    const handleClick_ = event => {
        let eventName = event.target.name;
        dispatch( handleClick({eventName}) )
    }
    const handleBackspace = () => {
        dispatch( backspace() )
    }
    
    return(
        <>
            <button onClick={handleClick_} name='1' className="grid-row-2">1</button>
            <button onClick={handleClick_} name='2' className="grid-row-2">2</button>
            <button onClick={handleClick_} name='3' className="grid-row-2">3</button>
            <button onClick={handleClick_} name='4' className="grid-row-3">4</button>
            <button onClick={handleClick_} name='5' className="grid-row-3">5</button>
            <button onClick={handleClick_} name='6' className="grid-row-3">6</button>
            <button onClick={handleClick_} name='7' className="grid-row-4">7</button>
            <button onClick={handleClick_} name='8' className="grid-row-4">8</button>
            <button onClick={handleClick_} name='9' className="grid-row-4">9</button>
            <button onClick={handleClick_} name='.' className="grid-row-5 point">.</button>
            <button onClick={handleClick_} name='0' className="grid-row-5">0</button>
            <button onClick={handleBackspace} name='backspace' className="grid-row-5 percent"><FontAwesomeIcon icon={faDeleteLeft} /></button>
        </>
    )

}

export default NumbersButtons;
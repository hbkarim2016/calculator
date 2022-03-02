import { useDispatch } from 'react-redux';
import { handleClick } from "../redux/reducers/CalcSlice";
const DividedButton = () => {
    
    const dispatch = useDispatch();
    const handleClick_ = event => {
        let eventName = event.target.name;
        dispatch( handleClick({eventName}) )
    }
    
    return(
        <>
            <button onClick={handleClick_} name='/' className="divided grid-row-1">/</button>
        </>
    )
}
export default DividedButton;
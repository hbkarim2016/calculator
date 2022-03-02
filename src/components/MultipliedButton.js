import { useDispatch } from 'react-redux';
import { handleClick } from "../redux/reducers/CalcSlice";
const MultipliedButton = () => {
    
    const dispatch = useDispatch();
    const handleClick_ = event => {
        let eventName = event.target.name;
        dispatch( handleClick({eventName}) )
    }
    return(
        <>
            <button onClick={handleClick_} name='*' className="multiplied grid-row-1">X</button>
        </>
    )
}
export default MultipliedButton;
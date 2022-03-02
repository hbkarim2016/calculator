import { useDispatch } from 'react-redux';
import { handleClick } from "../redux/reducers/CalcSlice";
const PlusButton = () => {
    const dispatch = useDispatch();
    const handleClick_ = event => {
        let eventName = event.target.name;
        dispatch( handleClick({eventName}) )
    }
    return(
        <>
            <button onClick={handleClick_} name='+' className="plus">+</button>
        </>
    )
}
export default PlusButton;
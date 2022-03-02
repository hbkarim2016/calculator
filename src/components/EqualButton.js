import { useDispatch } from 'react-redux';
import { handleResult } from "../redux/reducers/CalcSlice";
const EqualButton = () => {
    const dispatch = useDispatch();
    const showResult = () => {
        dispatch( handleResult() );
    }
    return(
        <>
            <button onClick={showResult} name='=' className="equal">=</button>
        </>
    )
}
export default EqualButton;
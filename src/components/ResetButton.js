import { useDispatch } from 'react-redux';
import { clear } from "../redux/reducers/CalcSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
const ResetButton = () => {
    const dispatch = useDispatch();
    const clear_ = () => {
        dispatch( clear() );
    }
    return(
        <>
            <button onClick={ clear_ } className="reset"><FontAwesomeIcon icon={faRotate} /></button>
        </>
    )
}
export default ResetButton;
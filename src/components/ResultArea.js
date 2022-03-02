import { useSelector } from 'react-redux';
const ResultArea = () => {
    const {result} = useSelector( state => state.calculator );

    return(
        <div className="result_area">
            <h2>{ result }</h2>
        </div>
    )
}
export default ResultArea;
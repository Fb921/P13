import "../styles/loadingSpinner.css"
import spinner from "../assets/spinner.svg"

function LoadingSpinner(){
    return(
        <div className='spinner_container'>
            <img src={spinner}/>
        </div>
    )
}

export default LoadingSpinner;
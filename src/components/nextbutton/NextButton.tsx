import './nextbutton.scss';
import { Link } from 'react-router-dom'


const NextButton = ({ url }: { url: string} ) => {
    return (

        <button className="nextButton">
            <Link to={`/${url}`} >Next <i className="fa fa-arrow-right fa-lg"></i></Link>  
        </button>
    )
}

export default NextButton
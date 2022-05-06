import './nextbutton.scss';
import { Link } from 'react-router-dom'


const NextButton = ({ url }: { url: string} ) => {

    return (
        <Link to={`/${url}`} className="nextButton" > 
            Next <i className="fa fa-arrow-right fa-lg"></i> 
        </Link> 
    )

}

export default NextButton
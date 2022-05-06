
import './gettingstarted.scss'
import Underconstruction from '../underconstruction/Underconstruction'
import Title from '../../title/Title'
import NextButton from '../../nextbutton/NextButton'


const Gettingstarted = () => {

    return (
        <section>
        <Title heading="Getting Started" />
        <Underconstruction />
        <NextButton url="introductiontohtml" />
        </section>
    )

}

export default Gettingstarted
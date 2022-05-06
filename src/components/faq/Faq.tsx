import Accordion from '../Accordion'
import Title from '../Title'
import NextButton from '../NextButton'
import FaqData from '../data/FaqData'

const Faq = () => {
    return (
        <section>
            <Title heading=" WEB DESIGN FAQ" />
            <Accordion data={ FaqData } />
            <NextButton url="home" />
        </section>
    )
}

export default Faq
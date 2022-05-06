import Accordion from '../accordion/Accordion'
import Title from '../title/Title'
import NextButton from '../nextbutton/NextButton'
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
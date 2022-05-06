import Accordion from '../../accordion/Accordion'
import Title from '../../title/Title'
import NextButton from '../../nextbutton/NextButton'
import FaqList from '../../lists/FaqList'


const Faq = () => {

    return (
        <section>
            <Title heading=" WEB DESIGN FAQ" />
            <Accordion data={ FaqList } />
            <NextButton url="gettingstarted" />
        </section>
    )

}

export default Faq
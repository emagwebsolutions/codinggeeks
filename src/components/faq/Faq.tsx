import Accordion from '../Accordion'
import Title from '../Title'
import NextButton from '../NextButton'

const Faq = () => {
    return (
        <section>
            <Title heading=" WEB DESIGN FAQ" />
            <Accordion heading="What is a website?" message="This is the accordion message" />

            <NextButton url="home" />
        </section>
    )
}

export default Faq
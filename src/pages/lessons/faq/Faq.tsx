import Accordion from "../../../components/accordion/Accordion";
import Title from "../../../components/title/Title";
import NextButton from "../../../components/nextbutton/NextButton";
import FaqList from "../../../data/FaqList";

const Faq = () => {
	return (
		<section>
			<Title heading=" WEB DESIGN FAQ" />
			<Accordion data={FaqList} />
			<NextButton url="gettingstarted" />
		</section>
	);
};

export default Faq;

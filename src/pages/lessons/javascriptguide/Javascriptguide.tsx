import "./javascriptguide.scss";
import Underconstruction from "../underconstruction/Underconstruction";
import Title from "../../../components/title/Title";
import NextButton from "../../../components/nextbutton/NextButton";

const Javascriptguide = () => {
	return (
		<section>
			<Title heading="Javascript Beginners Guide" />
			<Underconstruction />
			<NextButton url="resources" />
		</section>
	);
};

export default Javascriptguide;

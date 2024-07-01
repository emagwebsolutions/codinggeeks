import "./introtocssboxmodel.scss";
import Underconstruction from "../underconstruction/Underconstruction";
import Title from "../../../components/title/Title";
import NextButton from "../../../components/nextbutton/NextButton";

const Introtocssboxmodel = () => {
	return (
		<section>
			<Title heading="Introduction to CSS Box Model" />
			<Underconstruction />
			<NextButton url="cssselectors" />
		</section>
	);
};

export default Introtocssboxmodel;

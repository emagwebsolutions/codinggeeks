import "./introductiontohtml.scss";
import Underconstruction from "../underconstruction/Underconstruction";
import Title from "../../../components/title/Title";
import NextButton from "../../../components/nextbutton/NextButton";

const Introductiontohtml = () => {
	return (
		<section>
			<Title heading="Introduction to HTML" />
			<Underconstruction />
			<NextButton url="workingwithimages" />
		</section>
	);
};

export default Introductiontohtml;

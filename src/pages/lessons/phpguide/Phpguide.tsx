import "./phpguide.scss";
import Underconstruction from "../underconstruction/Underconstruction";
import Title from "../../../components/title/Title";
import NextButton from "../../../components/nextbutton/NextButton";

const Phpguide = () => {
	return (
		<section>
			<Title heading="PHP Beginners Guide" />
			<Underconstruction />
			<NextButton url="resources" />
		</section>
	);
};

export default Phpguide;

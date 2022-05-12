import "./resources.scss";
import Title from "../../../components/title/Title";
import NextButton from "../../../components/nextbutton/NextButton";
import ResourcesList from "../../../data/ResourcesList";
import MapFunc from "../../../utils/MapFunc";

const Resources = () => {
	const data = (v: any, k: number) => {
		return (
			<a href={v.url} className="resource">
				<h1>{v.name}</h1>
				<p>{v.courses}</p>
			</a>
		);
	};

	const mapfunc = MapFunc(data)(ResourcesList);

	return (
		<section>
			<Title heading="Resources" />
			{mapfunc}
			<NextButton url="" />
		</section>
	);
};

export default Resources;

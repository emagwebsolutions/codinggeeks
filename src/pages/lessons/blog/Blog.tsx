import "./blog.scss";
import Title from "../../../components/title/Title";
import NextButton from "../../../components/nextbutton/NextButton";
import BlogList from "../../../data/BlogList";
import MapFunc from "../../../utils/MapFunc";

const Resources = () => {
	const data = (v: any, k: number) => {
		return (
			<div className="blog" key={k}>
				<picture>
					<img src={v.image} alt={v.name} />
				</picture>
				<div>
					<h4>
						{" "}
						<i className="fa fa-laptop fa-lg"></i> {v.name}
					</h4>
					<p>
						{" "}
						<i className="fa fa-map-marker fa-lg"></i> {v.venue}
					</p>
					<div className="date">
						{" "}
						<i className="fa fa-calendar fa-lg"></i> {v.date}{" "}
					</div>
				</div>
			</div>
		);
	};

	const mapfunc = MapFunc(data)(BlogList);

	return (
		<section>
			<Title heading="Our Blog" />
			{mapfunc}
			<NextButton url="" />
		</section>
	);
};

export default Resources;

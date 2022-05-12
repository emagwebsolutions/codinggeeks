import { Suspense, lazy } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import "./sass/reset.scss";
import "./sass/utils.scss";

const Footer = lazy(() => import("./components/footer/Footer"));
const Nav = lazy(() => import("./components/nav/Nav"));
const Setup = lazy(() => import("./pages/lessons/setup/Setup"));
const Faq = lazy(() => import("./pages/lessons/faq/Faq"));
const Gettingstarted = lazy(
	() => import("./pages/lessons/gettingstarted/Gettingstarted")
);
const Introductiontohtml = lazy(
	() => import("./pages/lessons/introductiontohtml/Introductiontohtml")
);
const Workingwithimages = lazy(
	() => import("./pages/lessons/workingwithimages/Workingwithimages")
);
const Addinglinks = lazy(
	() => import("./pages/lessons/addinglinks/Addinglinks")
);
const Stylingawebpage = lazy(
	() => import("./pages/lessons/stylingawebpage/Stylingawebpage")
);
const Introtocssboxmodel = lazy(
	() => import("./pages/lessons/introtocssboxmodel/Introtocssboxmodel")
);
const Cssselectors = lazy(
	() => import("./pages/lessons/cssselectors/Cssselectors")
);
const Csslayoutdesign = lazy(
	() => import("./pages/lessons/csslayoutdesign/Csslayoutdesign")
);
const Javascriptguide = lazy(
	() => import("./pages/lessons/javascriptguide/Javascriptguide")
);
const Phpguide = lazy(() => import("./pages/lessons/phpguide/Phpguide"));
const Blog = lazy(() => import("./pages/lessons/blog/Blog"));
const Resources = lazy(() => import("./pages/lessons/resources/Resources"));

const PageLoader = () => {
	return (
		<div className="page-loader">
			<i className="fa fa-spinner fa-lg fa-spin"></i>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<ErrorBoundary>
				<HashRouter>
					<Suspense fallback={<PageLoader />}>
						<Nav />
						<Routes>
							<Route path="/" element={<Setup />} />
							<Route path="/faq" element={<Faq />} />
							<Route path="/gettingstarted" element={<Gettingstarted />} />
							<Route
								path="/introductiontohtml"
								element={<Introductiontohtml />}
							/>
							<Route
								path="/workingwithimages"
								element={<Workingwithimages />}
							/>
							<Route path="/addinglinks" element={<Addinglinks />} />
							<Route path="/stylingawebpage" element={<Stylingawebpage />} />
							<Route
								path="/introtocssboxmodel"
								element={<Introtocssboxmodel />}
							/>
							<Route path="/cssselectors" element={<Cssselectors />} />
							<Route path="/csslayoutdesign" element={<Csslayoutdesign />} />
							<Route path="/javascriptguide" element={<Javascriptguide />} />
							<Route path="/phpguide" element={<Phpguide />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/resources" element={<Resources />} />
						</Routes>
						<Footer />
					</Suspense>
				</HashRouter>
			</ErrorBoundary>
		</div>
	);
}

export default App;

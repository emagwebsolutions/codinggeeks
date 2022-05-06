import React, { Suspense,lazy } from 'react';
import { Route,Routes,HashRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import './sass/reset.scss'
import './sass/utils.scss'

const Footer = lazy( () => import('./components/footer/Footer') )
const Nav = lazy( () => import('./components/nav/Nav') )
const Setup = lazy( () => import('./components/lessons/setup/Setup') )
const Faq = lazy( () => import('./components/lessons/faq/Faq') )
const Gettingstarted = lazy( () => import('./components/lessons/gettingstarted/Gettingstarted') )
const Introductiontohtml = lazy( () => import('./components/lessons/introductiontohtml/Introductiontohtml') )
const Workingwithimages = lazy( () => import('./components/lessons/workingwithimages/Workingwithimages') )
const Addinglinks = lazy( () => import('./components/lessons/addinglinks/Addinglinks') )
const Stylingawebpage = lazy( () => import('./components/lessons/stylingawebpage/Stylingawebpage') )
const Introtocssboxmodel = lazy( () => import('./components/lessons/introtocssboxmodel/Introtocssboxmodel') )
const Cssselectors = lazy( () => import('./components/lessons/cssselectors/Cssselectors') )
const Csslayoutdesign = lazy( () => import('./components/lessons/csslayoutdesign/Csslayoutdesign') )
const Javascriptguide = lazy( () => import('./components/lessons/javascriptguide/Javascriptguide') )
const Phpguide = lazy( () => import('./components/lessons/phpguide/Phpguide') )
const Blog = lazy( () => import('./components/lessons/blog/Blog') )
const Resources = lazy( () => import('./components/lessons/resources/Resources') )


const PageLoader = () => {
    return (
        <div className="page-loader">
            <i className="fa fa-spinner fa-lg fa-spin"></i>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
          <HashRouter>
            <Suspense fallback={(<PageLoader />)}>
                <Nav />
                <Routes>
                  <Route path="/" element={<Setup />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/gettingstarted" element={<Gettingstarted />} />
                  <Route path="/introductiontohtml" element={<Introductiontohtml />} />
                  <Route path="/workingwithimages" element={<Workingwithimages />} />
                  <Route path="/addinglinks" element={<Addinglinks />} />
                  <Route path="/stylingawebpage" element={<Stylingawebpage />} />
                  <Route path="/introtocssboxmodel" element={<Introtocssboxmodel />} />
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

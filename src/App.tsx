import React, { Suspense,lazy } from 'react';
import { Route,Routes,HashRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import './sass/reset.scss'
import './sass/utils.scss'

const Footer = lazy( () => import('./components/footer/Footer') )
const Nav = lazy( () => import('./components/nav/Nav') )
const Home = lazy( () => import('./components/home/Home') )

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
                  <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Suspense>
          </HashRouter>

      </ErrorBoundary>
    </div>
  );
}

export default App;

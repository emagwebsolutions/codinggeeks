import { Link } from 'react-router-dom'
import Hamburgeropen from './Hamburgeropen'
import Hamburgerclose from './Hamburgerclose'
import React, { useRef,useEffect } from 'react'
import './nav.scss'


const Nav = ()=>{

    const nav = useRef<HTMLElement>(null)

    const opennav = ( e:React.MouseEvent<HTMLDivElement> )=>{
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'false'){
            cur && cur.setAttribute('data-nav', 'true')
        }
    }

    const closenav = ( e:React.MouseEvent<HTMLDivElement> )=>{ 
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'true'){
            cur && cur.setAttribute('data-nav', 'false')
        }
    }




    useEffect(() => {
        const onclick = (ev: any) => {
            if(ev.target.matches('nav')){
                ev.target.setAttribute('data-nav', 'false')
            }
        }
          
        window.addEventListener('click', onclick);
        
        return () => {
          window.removeEventListener('click', onclick);
        }
      }, []);


    return (
        <> 
        <section className="nav-section">
        <span>Call us now on: <a href="tel:+233576705880">+233 57 670 5880</a></span>
        <span>Email us: info@unakreations.com</span> 
        </section>

        <Hamburgeropen opennav = {opennav}  name="U & A Creation" />

        <nav data-nav="false" ref={nav} className="nav">
            <div className="nav-wrapper">

            <Hamburgerclose closenav = {closenav}  />

            <div className="logo">
                <img src="./images/logo.jpg" alt="Logo" />
            </div>
            <ul>
                <li className="active">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/#">About Us</Link>
                        <ul>
                            <li>
                            <Link to="/team">Our Team</Link>
                            </li>
                            <li>
                            <Link to="/careers">Careers</Link>
                            </li>
                            <li>
                            <Link to="/testimonials">Testimonials</Link>
                            </li>
                        </ul>
                </li>
                <li>
                    <Link to="/#">Services</Link>
                    <ul>
                        <li>
                            <Link to="/klodin">U&A Klodin</Link>
                        </li>
                        <li>
                            <Link to="/album">U&A Album</Link>
                        </li>
                        <li>
                            <Link to="/grafix">U&A GRAFIX</Link>
                        </li>
                        <li>
                            <Link to="/photocopy">Photocopy</Link>
                        </li>
                        <li>
                            <Link to="/advertising">Advertising</Link>
                        </li>
                        <li>
                            <Link to="/printing">Printing</Link>
                        </li>
                        <li>
                            <Link to="/training">Training</Link>
                        </li>
                        <li>
                            <Link to="/administrative">Administrative Services</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/#">Portfolio</Link>
                    <ul>
                        <li>
                            <Link to="/branding">Branding</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="request-btn">
                    <Link to="/">Request a free quote</Link>
                </li>
            </ul>

            </div>
        </nav>
        </>
    )
}

export default Nav
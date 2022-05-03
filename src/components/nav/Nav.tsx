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
        <Hamburgeropen opennav = {opennav}  name="" />

        <nav data-nav="false" ref={nav} className="nav">
            <div className="nav-wrapper">

            <Hamburgerclose closenav = {closenav}  />

            <div className="logo">
                <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="Logo" />
            </div>
            <ul>
                <li className="active">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/#">Web Design FAQ</Link>
                </li>
                <li>
                    <Link to="/#">Getting Started</Link>
                </li>
                <li>
                    <Link to="/#">Introduction to HTML</Link>
                </li>
                <li>
                    <Link to="/contact">Working with IMAGES</Link>
                </li>

                <li>
                    <Link to="/blog">Adding links to a web page</Link>
                </li>
                <li>
                    <Link to="/blog">Styling a web page</Link>
                </li>
                <li>
                    <Link to="/blog">Introduction to CSS Box Model</Link>
                </li>
                <li>
                    <Link to="/blog">Css selectors</Link>
                </li>
                <li>
                    <Link to="/blog">Css layout design</Link>
                </li>

                

                <li className="bg-danger donate">
                    <a href="https://wa.me/233246845285?text=I%20want%20to%20make%20a%20donation%20to%20support%20Coding%20Geeks">DONATE</a>
                </li>
                <li className="bg-primary donate">
                    <a href="https://wa.me/233246845285?How%20do%20I%20become%20a%20patron%20and%20what%20are%20the%20benifits%3F">Become a Patron</a>
                </li>
            </ul>

            </div>
        </nav>
        </>
    )
}

export default Nav
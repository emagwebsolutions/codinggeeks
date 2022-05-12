import Hamburgeropen from "./Hamburgeropen";
import Hamburgerclose from "./Hamburgerclose";
import React, { useRef, useEffect } from "react";
import "./nav.scss";
import LinksList from "../../data/LinksList";
import MapFunc from "../../utils/MapFunc";
import Links from "../links/Links";

const Nav = () => {
	const nav = useRef<HTMLElement>(null);

	//Function to opens menu
	const opennav = (e: React.MouseEvent<HTMLDivElement>) => {
		const cur = nav.current ? nav.current : "";
		const navElem = cur ? cur.getAttribute("data-nav") : "";
		if (navElem === "false") {
			cur && cur.setAttribute("data-nav", "true");
		}
	};

	//Function to close menu
	const closenav = (e: React.MouseEvent<HTMLElement>) => {
		const cur = nav.current ? nav.current : "";
		const navElem = cur ? cur.getAttribute("data-nav") : "";
		if (navElem === "true") {
			cur && cur.setAttribute("data-nav", "false");
		}
	};

	//When nav menu opacity is clicked menu should hide
	useEffect(() => {
		const onclick = (ev: any) => {
			if (ev.target.matches("nav")) {
				ev.target.setAttribute("data-nav", "false");
			}
		};

		window.addEventListener("click", onclick);

		return () => {
			window.removeEventListener("click", onclick);
		};
	}, []);

	//Function to oop through link list
	const Fn = (v: any, k: number) => (
		<Links url={v.url} text={v.text} icon={v.icon} closenav={closenav} />
	);

	const listoflinks = MapFunc(Fn)(LinksList);

	return (
		<>
			<Hamburgeropen opennav={opennav} name="" />

			<nav data-nav="false" ref={nav} className="nav">
				<div className="nav-wrapper" data-nav="false">
					<Hamburgerclose closenav={closenav} />

					<div className="logo">
						<img src="images/logo.PNG" alt="Logo" />
					</div>
					<ul>
						{listoflinks}

						<li
							className="bg-danger donate"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<a href="https://wa.me/233246845285?text=I%20want%20to%20make%20a%20donation%20to%20support%20Coding%20Geeks">
								DONATE
							</a>
						</li>
						<li
							className="bg-primary donate"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<a href="https://wa.me/233246845285?text=Hello%20how%20do%20I%20become%20a%20patron%20and%20what%20are%20the%20benefits%3F">
								Become a Patron
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Nav;

import React from 'react';
import './App.css';

export default function Footerpage() {
	return (
		<div className="footerpage">
			<div className="footerhalf">
				<div className="footermain">
					<h1>Learn problem solving</h1>
					<p>Create custom landing pages with Omega that converts <br/>  more visitors than any website.</p>
				</div>
				<button className="footmybtn">Get this book</button>
			</div>

				<nav>	
					<h1>Omega</h1>
					<ul className="upperlinks">
						<li>Support</li>
						<li>Privacy Policy</li>
						<li>Terms and Conditions</li>
					</ul>
					<p>© 2020 UXTheme, All Rights Reserved</p>
				</nav>
		</div>
	)
}
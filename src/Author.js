import React from 'react';
import user from './images/user2.png';

export default function Author() {
	return (
		<div className="author">
			<h1 style={{textAlign:"center"}}>About the author</h1>
			<div className="authordata">
				<img src={user} alt="userImg"/>
				<div className="authortxt">
					<h2>Joseph Williams</h2>
				<p>Hey! My name is Joseph Williams and I'm a product designer based in Berlin. Most recently I led the design of multiple products at WeWork and prior to that I worked with startups building their products and design culture.</p>
				<br/>
				<p>Previous products I built for the design community are used by tens of thousands of designers working at companies like Google, Airbnb, Netflix and Boeing. Products I built or designed are featured in Wired, TechCrunch, Forbes, Quartz, Smashing Magazine, Awwwards and more.</p>
				<h5>Reach me on <a href="#">Twitter</a> or <a href="#">Email</a>.</h5>
				</div>
			</div>
		</div>
	)
}
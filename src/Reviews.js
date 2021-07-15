import React from 'react';
import './App.css'; 
import userone from './images/userone.png';
import usertwo from './images/usertwo.png';
import userthree from './images/userthree.png';


export default function Reviews() {
	return (
		<div className="reviews">
			<h1>Reviews from readers</h1>
			<p>Create custom landing pages with Omega that converts <br/> more visitors than any website.</p>

			<div className="reviewcard">
				<div className="rcard">
					<h4>5/5</h4>
					<p>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
					<div className="ruser">
						<img src={userone} alt="userpic"/>
						<div className="rname">
						<h3>Darika Samak</h3>
						<h5>From Amazon.com</h5>
						</div>
					</div>
				</div>
				<div className="rcard">
					<h4>4/5</h4>
					<p>“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
					<div className="ruser">
						<img src={usertwo} alt="userpic"/>
						<div className="rname">
						<h3>Elsie Curtis</h3>
						<h5>From Amazon.com</h5>
						</div>
					</div>
				</div>
				<div className="rcard">
					<h4>5/5</h4>
					<p>Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.</p>
					<div className="ruser">
						<img src={userthree} alt="userpic"/>
						<div className="rname">
						<h3>Trashae Hubbard</h3>
						<h5>From Amazon.com</h5>
						</div>
					</div>
				</div>
			</div>
			<a href="#">Check all 3,583 reviews on Amazon.com</a>

		</div>
	)
}
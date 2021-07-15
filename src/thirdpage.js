import React from 'react';
import './App.css';
import book from './images/book2.png';

export default function Thirdpage() {
	return (
		<div className="thirdpage">
			<h1>Things you’ll learn</h1>
			<p>Create custom landing pages with Omega that converts <br/> more visitors than any website.</p>
			<div className="container">
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>How to improve yourself with small tasks.</p>
				</div>
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>How to utilize your time while working hard.</p>
				</div>
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>How to think creatively.</p>
				</div>
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>Solving your problems without hurting yourself.</p>
				</div>
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>Making money smartly.</p>
				</div>
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>Developing new skills fast and furious!</p>
				</div>
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>Understanding People 101.</p>
				</div>
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>10 secrects to solve any problem easily.</p>
				</div>
				<div className="smallbox">
					<h1><i class="fas fa-check-circle"></i></h1>
					<p>Creating valuable goal for next 5 years.</p>
				</div>
			</div>
			<div className="bluecont">
				<img src={book} alt="book"/>
				<div className="bluetxt">
					<h1>Get a free chapter of this book</h1>
					<p>Create custom landing pages with Omega that <br/> converts more visitors than any website.</p>
				</div>
				<button className="thirdbtn">Get a free chapter</button>
			</div>

		</div>
	)
}
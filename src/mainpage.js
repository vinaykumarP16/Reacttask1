import React from 'react';
import './App.css';
import book from './images/book.png';
import User from './User.js';

export default function Mainpage() {
	return (
			<div>
				<nav>	
					<h1>Omega</h1>
					<ul className="upperlinks">
						<li>demos</li>
						<li>pages</li>
						<li>support</li>
					</ul>
					<button className="mainbutton">Get this book</button>
				</nav>

				<div className="main">
					<div className="imagebox">
						<img src={book} alt="book"/>
					</div>
					<div className="textbox">
						<h1>Solve your daily life <br/> problems in 1 minute  </h1>
						<ul>
							<li><i class="far fa-check-circle"></i> 12 Chapter with detail illustrations</li>
							<li><i class="far fa-check-circle"></i> Learn from the expert with 24 years experience</li>
							<li><i class="far fa-check-circle"></i> Audio version is included with the purchase</li>
						</ul>
						<button className="mainbtn">get this book - Starts from $29</button>
						<p>Interested in a free chapter? <a href="#"> Get it now</a></p>
					</div>
				</div>
				<User/>

			</div>
	)
}
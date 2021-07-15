import React from 'react';
import './App.css';

export default function Secondpage() {
	return (
		<div className="second">
				<h1>Chapters we’ve covered</h1>
				<p>Create custom landing pages with Omega that converts </p>
				<br/>
				<p>more visitors than any website.</p>
				<div className="box" style={{backgroundColor:"#ffff"}}>
					<div className="one">
						<h1>1</h1>
					</div>
					<div className="datas">
						<h5 style={{color:"blue"}}>Chapter 01</h5>
						<h3>What is problem solving?</h3>
						<p>Create custom landing pages with Omega that converts <br/> more visitors than any website. With lots of unique blocks,<br/> you can easily build a page without coding.</p>
					</div>
				</div>
				<div className="cardssecond">
					<div className="secondcards">
						<h1 className="fonticon"><i class="fas fa-receipt"></i></h1>
						<h3>Solve Daily Problems</h3>
						<p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
					</div>
					<div className="secondcards">
						<h1 className="fonticon"><i class="fas fa-chess-queen"></i></h1>
						<h3>Key Notes on Each Chapter</h3>
						<p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
					</div>
					<div className="secondcards">
						<h1 className="fonticon"><i class="fas fa-money-check-alt"></i></h1>
						<h3>Audio Book Available</h3>
						<p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
					</div>
				</div>
		</div>
	)
}
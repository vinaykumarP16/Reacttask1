import React from 'react'

export default function Price() {
	return (
		<div className="price">
			<h1>Pricing & Plans</h1>
			<p>Create custom landing pages with Omega that converts <br/> more visitors than any website.</p>

			<div className="priceCards">
				<div className="pricecard">
					<h5>Limited</h5>
					<h1>Free</h1>
					<p> Get a free chapter of our book right now.<br/> </p>
					<input type="email" placeholder="enter email adress"/> 
					<button className="pricebtn" >Send free chapter</button>
				</div>
				<div className="pricecard">
					<h5>Only eBook</h5>
					<h1>$29</h1>
					<h6>One time purchase</h6>
					<p>Get the eBook version +<br/> Audio version of the book.  </p>
					<button className="pricebtn">Buy from Amazon</button>
				</div>
				<div className="pricecard">
					<h5>Everything</h5>
					<h1>$49</h1>
					<h6>One time purchase</h6>
					<p>Hardcover + eBook version + <br/>  Audio version of the book.</p>
					<button className="pricebtn">Buy from Amazon</button>
				</div>
			</div>

			<div className="pricetxt">
				<div className="priceflex">
				
							<div className="pricetxtdata">
							
							<h2>Can I use Omega for my clients?</h2>
							<p>Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.</p>
							</div>
							<div className="pricetxtdata">
								<h1></h1>
								<h2>Do I get free updates?</h2>
								<p>Yes. We update all of our themes regularly, plus are constantly adding new components, pages, and features to our themes. Purchase once and get lifetime updates.</p>
							</div>
				</div>
				<div className="priceflex">
							<div className="pricetxtdata">
								<h1></h1>
								<h2>Does it work with WordPress?</h2>
								<p>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. </p>
							</div>
							<div className="pricetxtdata">
								<h1></h1>
								<h2>Will you provide support?</h2>
								<p>With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.</p>
							</div>
							</div>
						</div>


		</div>
	)
}
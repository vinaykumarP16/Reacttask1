import React from 'react';
import user from './images/user.png';
import './App.css';

export default function User() {
	return (
		<div className="user">
			<img src={user} alt="userpic"/>
			<div className="usertxt">
				<p style={{ fontWeight:"100",fontStyle:" italic",color: "#696871"}}>“OMG! I cannot believe that I have got a brand new landing page <br/> after getting Omega. It was super easy to edit and publish.”</p>
				<h3>Jonathan Taylor</h3>
			</div>
		</div>
	)
}
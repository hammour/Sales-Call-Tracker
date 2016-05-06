import React from 'react';

export default React.createClass({
	render: function() {
		return (

			<div id="mainform">
				<h2>Contact US</h2>

				<form id="form">
					<h3>Contact Form</h3>
					<p id="returnmessage"></p>
					<label>Name: <span>*</span></label>
					<input type="text" id="name" placeholder="Name"/>
					<label>Email: <span>*</span></label>
					<input type="text" id="email" placeholder="Email"/>
					<label>Contact No: <span>*</span></label>
					<input type="text" id="contact" placeholder="10 digit Mobile no."/>
					<label>Message:</label>
					<textarea id="message" placeholder="Message......."></textarea>
					<input type="button" id="submit" value="Send Message"/>
				</form>
			</div>

        );
	}
});
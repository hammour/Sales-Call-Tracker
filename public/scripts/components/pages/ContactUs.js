import React from 'react';

export default React.createClass({
	render: function() {
		return (

			<div className="container">
				<form className="form-horizontal container col-sm-10 ">
					<h1>Contact US</h1>
							
						<div className="form-group">
							<label className="col-sm-3 control-label">Name: <span>*</span></label>
							<div className="col-sm-7">
								<input className="form-control"type="text" id="name" placeholder="Name"/>
							</div>
						</div>
							
						<div className="form-group">
							<label className="col-sm-3 control-label">Email: <span>*</span></label>
							<div className="col-sm-7">
								<input className="form-control"type="text" id="email" placeholder="Email"/>
							</div>
						</div>
							
						<div className="form-group">
							<label className="col-sm-3 control-label">Contact No: <span>*</span></label>
							<div className="col-sm-7">
								<input className="form-control"type="text" id="contact" placeholder="10 digit Mobile no."/>
							</div>
						</div>
							
						<div className="form-group">
							<label className="col-sm-3 control-label">Message:</label>
							<div className="col-sm-7">
								<textarea className="form-control" id="message" placeholder="Message......."></textarea>
							</div>
						</div>
					
					<input  className="button" type="button" id="submit" value="Send Message"/>
				</form>
			</div>

        );
	}
});
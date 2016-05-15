import React from 'react';

import $ from 'jquery';
import {browserHistory} from 'react-router';
import contact from '../../models/Contact';

export default React.createClass({
	getInitialState: function(){
		return {
			errors: {},
			contact: new contact
		};
	},



	render: function() {
		return (

			<div className="container">
				<form className="form-horizontal container col-sm-10 " onSubmit={this.register}>
					<h1>Contact US</h1>
							
						<div className="form-group">
							<label className="col-sm-3 control-label">Name: <span>*</span></label>
							<div className="col-sm-7">
								<input className="form-control"type="text" id="name" placeholder="Name" ref="name"/>
							</div>
						</div>
							
						<div className="form-group">
							<label className="col-sm-3 control-label">Email: <span>*</span></label>
							<div className="col-sm-7">
								<input className="form-control"type="text" id="email" placeholder="Email" ref="email"/>
							</div>
						</div>
							
						<div className="form-group">
							<label className="col-sm-3 control-label">Contact No: <span>*</span></label>
							<div className="col-sm-7">
								<input className="form-control"type="text" id="contact" placeholder="10 digit Mobile no." ref="contactNo"/>
							</div>
						</div>
							
						<div className="form-group">
							<label className="col-sm-3 control-label">Message:</label>
							<div className="col-sm-7">
								<textarea className="form-control" id="message" placeholder="Message......." ref="message"></textarea>
							</div>
						</div>
					
					<input  className="button" type="submit"  value="Send"/>
				</form>
			</div>

        );
	},
	register: function(e){
		e.preventDefault();
		$.ajax({
			url:'/api/v1/contact',
			type: 'POST',
			data:{
				name: this.refs.name.value,
				email:this.refs.email.value,
				contactNo: this.refs.contactNo.value,
				message: this.refs.message.value
				
			},
			dataType: 'json',
			headers: {
				Accept: 'application/json'
			},
			success: (successArg)=>{

				browserHistory.push('/home');
			},
			error: (errorArg)=>{
				
				this.setState({errors: errorArg.responseJSON});
			}
		});
		
	}
});
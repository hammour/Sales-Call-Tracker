import React from 'react';

import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from '../../models/User';

export default React.createClass({
	getInitialState: function(){
		return {
			errors: {},
			user: new user
		};
	},
	render: function() {
		return (
			<div className="container">
				
				
				<form className="form-horizontal container col-sm-10 " onSubmit={this.register}>
				<h1>Register</h1>
					<div className="form-group">
						<label for="input11" className="col-sm-2 control-label">First Name</label>
						<div className="col-sm-8">
							<input className="form-control" id="input11" type="text" placeholder="first name"ref="firstName"/>
						</div>
					</div>

					<div className="form-group">
						<label for="input12" className="col-sm-2 control-label">Last Name</label>
						<div className="col-sm-8">
							<input className="form-control" id="input12" type="text" placeholder="last name" ref="lastName"/>
						</div>
					</div>

					<div className="form-group">
						<label for="input13" className="col-sm-2 control-label">Email</label>
						<div className="col-sm-8">
							<input className="form-control" id="input13" type="email" placeholder="email" ref="email"/>
						</div>
					</div>
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>
					
					<div className="form-group">
						<label for="input14" className="col-sm-2 control-label">Password</label>
						<div className="col-sm-8">
							<input className="form-control" id="input14" type="password" placeholder="password" ref="password" />
						</div>
					</div>
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					
					<div className="form-group">
						<label for="input15" className="col-sm-2 control-label">User Type</label>
						<div className="col-sm-8">
							<input className="form-control" id="input15" type="text" placeholder="Type" ref="userType"/>
						</div>
					</div>

					<div className="form-group">
						<label for="input16" className="col-sm-2 control-label">Image Url</label>
						<div className="col-sm-8">
							<input className="form-control" id="input16" type="text" placeholder="Type" ref="imageUrl"/>
						</div>
					</div>

					<button className="btn-lg btn-default col-sm-offset-3" type="submit">Register</button>
				</form>
			</div>
		);
	},
	register: function(e){
		e.preventDefault();
		$.ajax({
			url:'/auth/register',
			type: 'POST',
			data:{
				email: this.refs.email.value,
				password:this.refs.password.value,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				userType: this.refs.userType.value,
				imageUrl: this.refs.imageUrl.value
			},
			dataType: 'json',
			headers: {
				Accept: 'application/json'
			},
			success: (successArg)=>{
				// console.log(successArg);
				// console.log('success');
				//this.state.user.set(registeredUser);
				// console.log(this.state.user);
				browserHistory.push('/login');
			},
			error: (errorArg)=>{
				
				this.setState({errors: errorArg.responseJSON});
			}
		});
		console.log('register code goes here');
	}

});



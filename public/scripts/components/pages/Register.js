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
			<section>
				<h1>Register</h1>
				<form onSubmit={this.register}>
					<div>First Name<input type="text" placeholder="first name"ref="firstName"/></div>
					<div>Last Name<input type="text" placeholder="last name" ref="lastName"/></div>
					<div>Email<input type="text" placeholder="email" ref="email"/></div>
					<div><div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div></div>
					<div>Password<input type="password" placeholder="password" ref="password" /></div>
					<div><div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div></div>
					<div>User Type<input type="text" placeholder="Type" ref="userType"/></div>
					<div>Image Url<input type="text" placeholder="Type" ref="imageUrl"/></div>
					<div><button type="submit">Register</button></div>
				</form>
			</section>
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



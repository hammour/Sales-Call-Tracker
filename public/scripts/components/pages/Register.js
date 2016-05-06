import React from 'react';

import $ from 'jquery';
import{hashHistory} from 'react-router';
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
					<input type="text" placeholder="first name"ref="firstName"/>

					<input type="text" placeholder="last name" ref="lastName"/>
					<input type="text" placeholder="email" ref="email"/>
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>
					<input type="password" placeholder="password" ref="password" />
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					<input type="text" placeholder="Type" ref="userType"/>
					<button type="submit">Register</button>
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
				userType: this.refs.userType.value
			},
			dataType: 'json',
			headers: {
				Accept: 'application/json'
			},
			success: (successArg)=>{
				console.log(successArg);
				console.log('success');
				//this.state.user.set(registeredUser);
				// console.log(this.state.user);
				hashHistory.push('/Login');
			},
			error: (errorArg)=>{
				
				this.setState({errors: errorArg.responseJSON});
			}
		});
		console.log('register code goes here');
	}

});



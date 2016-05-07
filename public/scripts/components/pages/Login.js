import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from '../../models/User';


export default React.createClass({
		getInitialState: function() {
		return {
			errors: {},
			user:window.user
		};
	},

	render: function() {
		return (
			<section className="page-login container">
				<div className="offset-by-four four columns">
					<form onSubmit={this.login} className="login-box"> <h1>Login</h1>
						<input className="u-full-width" type="text" placeholder="email" ref='email' title="Should be a valid email address" required="required"/>
						<div className="error">{this.state.errors.email ? this.state.errors.email.message : null} </div> 
						<input className="u-full-width" type="password" placeholder="password" ref='password' title="Password is required and cannot left blank" required="required"/>
						<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
						<button className="button-primary" type='submit'> Login </button>
					</form>
				</div>
			</section>
		);
	},
	login: function(e) {
	e.preventDefault();
	$.ajax({
		url: '/auth/login',
		type: 'POST',
		data: {
			email: this.refs.email.value,
			password: this.refs.password.value
		},
		headers: {
			Accept: 'application/json'
		},

		success: (loggedArg) => {
			console.log(loggedArg);
			window.user=loggedArg;
			this.setState({user:loggedArg});
			console.log('logged in');
			browserHistory.push('/dashboard');
		},
		error: (errorArg) => {
				

				this.setState({errors: errorArg.responseJSON});
			}
		});
	}
});
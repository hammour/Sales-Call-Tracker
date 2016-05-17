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
			
				<div className="container">
					<form className="form-horizontal container col-sm-10 " onSubmit={this.login}>
						<h1>Login</h1>
							
							<div className="form-group">
							<label  className="col-sm-3 control-label">Email</label>
								<div className="col-sm-7">
									<input className="form-control" type="text" placeholder="email" ref='email' title="Should be a valid email address" required="required"/>
									<div className="error">{this.state.errors.email ? this.state.errors.email.message : null} </div> 
								</div>
							</div>

							
							<div className="form-group">	
							<label  className="col-sm-3 control-label">Password</label>
								<div className="col-sm-7">
									<input className="form-control" type="password" placeholder="password" ref='password' title="Password is required and cannot left blank" required="required"/>
									<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
								</div>
							</div>


							<button className="button" type='submit'> Login </button>
					</form>
				</div>
			
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
			
			if (window.user.userType==='admin'){
				browserHistory.push('/dashboard');
			}
				else{
					browserHistory.push('/salesDash');
				};
		},
		error: (errorArg) => {
				

				this.setState({errors: errorArg.responseJSON});
			}
		});
	}
});
import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import user from '../models/User';
import {browserHistory} from 'react-router';

//import Stories from './../collections/StoryCollection';

export default React.createClass({
	getInitialState: function(){
		return {user:user};
	},

	componentDidMount: function(){

	},

	render: function() {
		if (window.user.userType === 'admin') {
			return (<nav className="navbar navbar-default">
				<div className="container-fluid">
				
				<div className="navbar-brand"><Link to="/Home">Home</Link></div>
				<div className="navbar-brand"><Link to="/AddCustomer">Add Customer</Link></div>
				<div className="navbar-brand"><Link to="/Register">Register</Link></div>
				<div className="navbar-brand"><Link to="/AddEvent">Add Event</Link></div>
				<div className="navbar-brand"><Link to="/Dashboard">Dashboard</Link></div>
				<div className="navbar-brand"><Link to="/Filter">Filter</Link></div>
				<div className="navbar-brand"><Link to="/ContactUs">Contact Us</Link></div>
				<div className="navbar-brand"><a href="#" onClick={this.logout}>Logout</a></div>
				</div>
			
			</nav>);
		}
		else if(window.user.userType) {
			return (<nav className="navbar navbar-default">
				<div className="container-fluid">
				
				<div className="navbar-brand"><Link to="/Home">Home</Link></div>
				<div className="navbar-brand"><Link to="/AddCustomer">Add Customer</Link></div>
				<div className="navbar-brand"><Link to="/Register">Register</Link></div>
				<div className="navbar-brand"><Link to="/AddEvent">Add Event</Link></div>
				<div className="navbar-brand"><Link to="/Dashboard">Dashboard</Link></div>
				<div className="navbar-brand"><Link to="/Filter">Filter</Link></div>
				<div className="navbar-brand"><Link to="/ContactUs">Contact Us</Link></div>
				<div className="navbar-brand"><a href="#" onClick={this.logout}>Logout</a></div>
				</div>
			
			</nav>);

		}
		else{
			return (<nav className="navbar navbar-default">
				<div className="container-fluid">
				
				<div className="navbar-brand"><Link to="/Home">Home</Link></div>
				<div className="navbar-brand"><Link to="/ContactUs">Contact Us</Link></div>
				<div className="navbar-brand"><Link to="/Login">Login</Link></div>
				<div className="navbar-brand"><a href="#" onClick={this.logout}>Logout</a></div>
				</div>
			
			</nav>);

		}


	},

	logout: function(e) {
		//e.preventDefault();
		window.user='';
		this.setState({user:''});
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/Home');
	}


});


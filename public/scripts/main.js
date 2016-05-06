// import $ from 'jquery';
// import Backbone from 'backbone';
// import {sync, errorHandler} from './ajax';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './components/pages/Login';
import AddCustomer from './components/pages/AddCustomer';
import AddEvent from './components/pages/AddEvent';
import Dashboard from './components/pages/Dashboard';
import Filter from './components/pages/Filter';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import ContactUs from './components/pages/ContactUs';

Backbone.sync = sync;
$.ajaxSetup({
	headers: {
		Accept: 'application/json'
	},
	beforeSend: function(xhr) {
		let error = this.error;
		if(error) {
			this.error = function(xhr) {
				errorHandler(xhr, error);
			};
		}
	}
});

function requireAuth(nextState, replace) {
	  if (!user.get('id')) {
	    replace({
	      pathname: '/login'
	    });
	}
};

const router = (
	<Router history={browserHistory}>
			<Route path="/" component={App}>
			<Route path="/home" component={Home}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Route path="/addcustomer" component={AddCustomer}/>
			<Route path="/addevent" component={AddEvent}/>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="/filter" component={Filter}/>
			<Route path="/contactus" component={ContactUs}/>


		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
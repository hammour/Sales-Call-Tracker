import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './components/pages/Login';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			


			<Route path="/login" component={Login}/>

		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
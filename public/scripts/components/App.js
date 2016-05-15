import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer'; 
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<main>
				<Navigation />
				{this.props.children}
				

				<Footer />
			</main>
		);
		browserHistory.push('/home');
	}
});
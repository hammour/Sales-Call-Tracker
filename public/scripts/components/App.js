import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer'; 

export default React.createClass({
	render: function() {
		return (
			<main>
				<Navigation />
				{this.props.children}
				<Footer />
			</main>
		);
	}
});
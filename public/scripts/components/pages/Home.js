import React from 'react';
import {Link} from 'react-router';



export default React.createClass({
	render: function() {
		return (
        	<div className="container">
            	<h1>Home</h1>
            	<div className="button"><Link to="/Login">LogIn</Link></div>
            	<div className="button"><Link to="/Register">Register</Link></div>
            	<div className="button"><Link to="/ContactUs">ContactUs</Link></div>
        	</div>
        );
	}
});



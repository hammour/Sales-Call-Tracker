import React from 'react';
import {Link} from 'react-router';



export default React.createClass({
	render: function() {
		return (
        	<div>
            	<h1>Home</h1>
            	<div><Link to="/Login">LogIn</Link></div>
            	<div><Link to="/Register">Register</Link></div>
            	<div><Link to="/ContactUs">ContactUs</Link></div>
        	</div>
        );
	}
});



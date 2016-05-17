import React from 'react';
import {Link} from 'react-router';



export default React.createClass({
	render: function() {
		return (
        	
            <div className="container">
            	<section className="header">
                    <h1>Sales <span id="call">CALL</span></h1>
                    <h4 className="tagline col-sm-12">An App for Salespeople and staff that automates sales reporting activites</h4>
                </section>
            	<div className="col-sm-4"><div className="button"><Link to="/Login">LogIn</Link></div></div>
            	<div className="col-sm-4"><div className="button"><Link to="/Register">Register</Link></div></div>
            	<div className="col-sm-4"><div className="button"><Link to="/ContactUs">ContactUs</Link></div></div>
        	</div>
        );
	}
});



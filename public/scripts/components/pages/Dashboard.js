import React from 'react';
import SalesReps from './SalesReps';
import Customers from './Customers';
import AddCustomerModal from './AddCustomerModal';
import AddEventModal from './AddEventModal';
import RegisterUserModal from './RegisterUserModal';
import ContactUsReport from './ContactUsReport';



export default React.createClass({
	getInitialState: function(){
		return{
			showModal: false
		};
	},
	render: function() {
		return (
        	<div className="container">
	            	<h1>Dashboard</h1>
	            
	        	<div className="col-sm-3">
					<AddEventModal/>
				</div>
				<div className="col-sm-3">
					<AddCustomerModal/>
				</div>
				<div className="col-sm-3">
					<RegisterUserModal/>
				</div>



            	<div className="col-sm-7"><SalesReps /></div>
            	<div className="col-sm-5"><ContactUsReport /></div>
            	<div className="col-sm-7"><Customers /></div>
            	
        	</div>
        );
	},
	close() {
    this.setState({ showModal: false });
	},

	open() {
	this.setState({ showModal: true });
	}
});
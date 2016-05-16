import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddCustomer from './AddCustomer';



export default React.createClass({
	getInitialState: function(){
		return{
			showModal: false
		};
	},
	render: function() {
		return (

        	<div>
				<button className="button" onClick={this.open}>+ Customer</button>	
				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Add Customer</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<AddCustomer/>

					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
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
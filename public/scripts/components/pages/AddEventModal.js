import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddEvent from './AddEvent';



export default React.createClass({
	getInitialState: function(){
		return{
			showModal: false
		};
	},
	render: function() {
		return (

        	<div>
				<button className="button" onClick={this.open}>+ EVENT</button>	
				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Add Event</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<AddEvent/>

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
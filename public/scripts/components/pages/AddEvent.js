import React from 'react';

import $ from 'jquery';
import {browserHistory} from 'react-router';
import event from '../../models/EventModel';

export default React.createClass({
	getInitialState: function(){
		return {
			errors: {},
			event: new event
		};
	},
	render: function() {
		return (
			<div className="container">	
				<form className="form-horizontal container col-sm-10 " onSubmit={this.register}>
				<h1>Add an Event</h1>
					<div className="form-group">
						<label  className="col-sm-3 control-label">Event Type</label>
						<div className="col-sm-7">	
							<input className="form-control" type="text" placeholder="Type of Event"ref="typeOfEvent"/>
						</div>
					</div>

					<div className="form-group">
						<label  className="col-sm-3 control-label">Event Notes</label>
						<div className="col-sm-7">	
							<input className="form-control" type="text" placeholder="Notes" ref="eventNotes"/>
						</div>
					</div>

					<div className="form-group">
						<label  className="col-sm-3 control-label">Follow Up Date</label>
						<div className="col-sm-7">	
							<input className="form-control" type="date"  ref="followUpDate"/>
						</div>
					</div>

					<div className="form-group">
						<label  className="col-sm-3 control-label">Customer ID</label>
						<div className="col-sm-7">	
							<input className="form-control" type="text" placeholder="Customer ID"ref="customerId"/>
						</div>
					</div>

					<div className="form-group">
						<label  className="col-sm-3 control-label">User ID</label>
						<div className="col-sm-7">	
							<input className="form-control" type="text" placeholder="User ID"ref="userId"/>
						</div>
					</div>

					<div className="form-group">
						
							<button className="btn btn-default col-sm-offset-3" type="submit">Submit</button>
						
					</div>

				</form>
			</div>
		);
	},
	register: function(e){
		e.preventDefault();
		$.ajax({
			url:'/api/v1/event',
			type: 'POST',
			data:{
				typeOfEvent: this.refs.typeOfEvent.value,
				eventNotes:this.refs.eventNotes.value,
				followUpDate: this.refs.followUpDate.value,
				customerId: this.refs.customerId.value,
				userId: window.user.id
			},
			dataType: 'json',
			headers: {
				Accept: 'application/json'
			},
			success: (successArg)=>{
				console.log(successArg);
				console.log('success');
				//this.state.user.set(registeredUser);
				// console.log(this.state.user);
				browserHistory.push('/filter');
			},
			error: (errorArg)=>{
				
				this.setState({errors: errorArg.responseJSON});
			}
		});

		//console.log('register code goes here');
	}
	


});



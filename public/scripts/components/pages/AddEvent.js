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
			<section>
				<h1>Add an Event</h1>
				<form onSubmit={this.register}>
					<input type="text" placeholder="Type of Event"ref="typeOfEvent"/>
					<input type="text" placeholder="Notes" ref="eventNotes"/>
					<input type="date"  ref="followUpDate"/>
					<input type="text" placeholder="Customer ID"ref="customerId"/>
					<input type="text" placeholder="User ID"ref="userId"/>
					<button type="submit">Submit</button>
				</form>
			</section>
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



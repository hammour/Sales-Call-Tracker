import React from 'react';

import $ from 'jquery';
import {browserHistory} from 'react-router';
import event from '../../models/EventModel';
import Customer from './../../models/CustomerModel';
import User from './../../models/User';
//import Customer from './../../collections/CustomerCollection';

export default React.createClass({
	getInitialState: function(){
		return {
			errors: {},
			event: new event,
			customer: Customer,
			userList: new User
		};
	},
	componentDidMount: function(){
		
		// this.state.customer.fetch({
		// 	data: 'customer',
		// 	error: (model, error) => {
		// 		this.setState({error: error.responseJSON.message});
		// 		}
		// 	});	
		
		$.get('/api/v1/user', (data)=>{
			this.setState({
				userList:data});
		});	
		$.get('/api/v1/customer', (data)=>{
			this.setState({
				customer:data});
		});	

	},
	render: function() {
		if (!this.state.userList[0]){return (<div>Still loading</div>);}
			else if(!this.state.customer[0]){return (<div>Still loading</div>);}
			else{
				const userListOptions = this.state.userList.map((rep, i, array)=>{
				return(<option key = {i} value={this.state.userList[i].id}>{this.state.userList[i].firstName}</option>);
				});
				const customerListOptions = this.state.customer.map((rep, i, array)=>{
				return(<option key = {i} value={this.state.customer[i].id}>{this.state.customer[i].name}</option>);
			});
				//console.log(this.state.customer[0].name);

			
		return (
			<div className="container">	
				<form className="form-horizontal container col-sm-10 " onSubmit={this.register}>
				<h1>Add an Event</h1>
					<div className="form-group">
						<label  className="col-sm-3 control-label">Event Type</label>
						<div className="col-sm-7">	
							<select className="form-control" ref="typeOfEvent">
								<option value='visit'>Visit</option>
								<option value='call'>Call</option>
								<option value='email'>Email</option>
								
								<option value='fax'>Fax</option>
								<option value='regularMail'>Regular Mail</option>
								<option value='other'>Other</option>
							</select>
						</div>
					</div>

					<div className="form-group">
						<label  className="col-sm-3 control-label">Event Notes</label>
						<div className="col-sm-7">	
							<textarea className="form-control" type="text" rows="3" placeholder="Notes" ref="eventNotes"/>
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
							<select className="form-control" ref="customerId">
								{customerListOptions}
							</select>
						</div>
					</div>

					<div className="form-group">
						<label  className="col-sm-3 control-label">User ID</label>
						<div className="col-sm-7">	
							
							<select className="form-control" ref="userId">
								{userListOptions}
							</select>
						</div>
					</div>

					<div className="form-group">
						
							<button className="button" type="submit">Submit</button>
						
					</div>

				</form>
			</div>
		);
	}
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

				 $('form').children('input:not(#submit)').val('');
				//browserHistory.push('/filter');




			},
			error: (errorArg)=>{
				
				this.setState({errors: errorArg.responseJSON});
			}
		});

		//console.log('register code goes here');
	}
	


});



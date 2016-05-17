import React from 'react';
import EventPreview from './../EventPreview';
import events from './../../collections/EventCollection';
import EventModel from './../../models/EventModel';
import $ from 'jquery';
import User from './../../models/User';
import Customer from './../../models/CustomerModel';
import { Button, Modal } from 'react-bootstrap';
import {browserHistory} from 'react-router';



export default React.createClass({
	getInitialState: function(){
		return {
			event: new EventModel,
			error:'',
			salesReps:  window.user,
			events: events,
			customer: new Customer,
			
			salesUserFilter: window.user.id,
			eventsTypeFilter: 'all',
			customerFilter: 'all',
			customerData: new Customer,
			showModal: false
		};
	},
	

	componentDidMount: function(){
		this.state.event.on('change', (eventData)=> {
			this.setState({event: this.state.event,
				
				events:events,
				users:users
				
			});
			
			
		});
		this.state.event.fetch({
			data: {withRelated: ['customer','user']},
			error: (model, error) => {
				this.setState({error: error.responseJSON.message});
				}
			});
		this.state.events.fetch();
		$.get('/api/v1/user', (data)=>{
			this.setState({salesReps:data});
		});
		$.get('/api/v1/customer', (data)=>{
			this.setState({customerData:data});
		});
		this.getUsers();	
	},



	render: function() {
		setTimeout(1000);
		if(!this.state.event.get(0)){

			return (<div className="hidden">Still loading</div>);
		}
		else if(!this.state.salesReps){

			return (<div className="hidden">Still loading</div>);
		}

		else { 
			// console.log(this.stat.event.get(0).customer);
			 window.setTimeout(1000);
			
			const customerOptions = this.state.customerData.map((rep, i, array)=>{
				return(<option value={this.state.customerData[i].id}>{this.state.customerData[i].name}</option>);
			});
			const eventsView= events.map((event,i, array)=>{
				if (this.state.customerFilter==='all')	{			
					if (this.state.salesUserFilter==='all'){
						return(
							<div>
								<EventPreview  
									userFirstName= {this.state.event.get(i).user.firstName}
									userLastName= {this.state.event.get(i).user.lastName}
									eventNotes={this.state.event.get(i).eventNotes}
									customerName={this.state.event.get(i).customer.name}
									typeOfEvent={this.state.event.get(i).typeOfEvent}
									followUpDate={this.state.event.get(i).followUpDate}
									imageUrl={this.state.event.get(i).user.imageUrl}/>
			            	</div>
							); 
					}
					else if (this.state.salesUserFilter==this.state.event.get(i).user.id){
						return(
							<div>
								<EventPreview  
									userFirstName= {this.state.event.get(i).user.firstName}
									userLastName= {this.state.event.get(i).user.lastName}
									eventNotes={this.state.event.get(i).eventNotes}
									customerName={this.state.event.get(i).customer.name}
									typeOfEvent={this.state.event.get(i).typeOfEvent}
									followUpDate={this.state.event.get(i).followUpDate}
									imageUrl={this.state.event.get(i).user.imageUrl}/>
			            	</div>
							); 

					}
					else{
							return(
								<div></div>);
					}
				}
				
				else if(this.state.customerFilter==this.state.event.get(i).customer.id){
					if (this.state.salesUserFilter==='all'){
						return(
							<div>
								<EventPreview  
									userFirstName= {this.state.event.get(i).user.firstName}
									userLastName= {this.state.event.get(i).user.lastName}
									eventNotes={this.state.event.get(i).eventNotes}
									customerName={this.state.event.get(i).customer.name}
									typeOfEvent={this.state.event.get(i).typeOfEvent}
									followUpDate={this.state.event.get(i).followUpDate}
									imageUrl={this.state.event.get(i).user.imageUrl}/>
			            	</div>
							); 
					}
					else if (this.state.salesUserFilter==this.state.event.get(i).user.id){
						return(
							<div>
								<EventPreview  
									userFirstName= {this.state.event.get(i).user.firstName}
									userLastName= {this.state.event.get(i).user.lastName}
									eventNotes={this.state.event.get(i).eventNotes}
									customerName={this.state.event.get(i).customer.name}
									typeOfEvent={this.state.event.get(i).typeOfEvent}
									followUpDate={this.state.event.get(i).followUpDate}
									imageUrl={this.state.event.get(i).user.imageUrl}/>
			            	</div>
							); 

					}
					else{
							return(
								<div></div>);
					}
				}
				else{
					return(
								<div></div>);
				}
			});
			//	console.log(salesUser);				
				return (
					
		        	<div className="container">

		            	<div>
		            		<h2>My Events</h2>
		            		<button className="button" onClick={this.open}>+ADD EVENT</button>	
	            		
	            		



	            		        <Modal show={this.state.showModal} onHide={this.close}>
					          <Modal.Header closeButton>
					            <Modal.Title>Add Event</Modal.Title>
					          </Modal.Header>
					          <Modal.Body>
					 		
					 		
						<label  className="col-sm-3 control-label">Event Type</label>
							
							<select className="form-control" ref="typeOfEventInput">
								<option value='visit'>Visit</option>
								<option value='call'>Call</option>
								<option value='email'>Email</option>
								
								<option value='fax'>Fax</option>
								<option value='regularMail'>Regular Mail</option>
								<option value='other'>Other</option>
							</select>
					

					
						<label  className="col-sm-3 control-label">Event Notes</label>
							
							<textarea className="form-control" type="text" rows="3" placeholder="Notes" ref="eventNotesInput"/>
					

					
						<label  className="col-sm-3 control-label">Follow Up Date</label>
							
							<input className="form-control" type="date"  ref="followUpDateInput"/>
					

					
						<label  className="col-sm-3 control-label">Customer ID</label>
							
							<select className="form-control" ref="customerIdInput">
								{customerOptions}
							</select>
	
						
							<button onClick= {this.register}className="button" type="submit">Submit</button>
				
				         	
					          </Modal.Body>
					          <Modal.Footer>
					            <Button onClick={this.close}>Close</Button>
					          </Modal.Footer>
					        </Modal>
					      </div>

		            	<form className="form-horizontal  col-sm-10 filter-form" onSubmit={this.getUsers}>
		
						<div className="form-group">
			            	<label  className="col-sm-3 control-label">Filter Events by Customer</label>	
			            	<div className="col-sm-7">
				            	<select className="form-control" ref="customerOptionSelection">
										<option value='all'>All</option>
										{customerOptions}		
								</select>
							</div>
						</div>
						<div className=" col-sm-offset-5">
							<button className="button " type="submit">Filter/Update</button>
						</div>
						</form>
		            	<div className="col-sm-12">{eventsView}</div>
		            	<div style={{clear: 'both'}} />
		        	</div>

		        );
	        }
	},	

	convertDay: (d)=>{
				var theDay = d.slice(0, 10).split('-'); 
				return theDay[1] +'/'+ theDay[2] +'/'+ theDay[0];
		},
	getUsers: function(e){
		e.preventDefault();
		console.log(this.state.salesUserFilter);
		this.setState({
			salesUserFilter: window.user.id,
			customerFilter: this.refs.customerOptionSelection.value
			});
		
	},

	close() {
    this.setState({ showModal: false });
	},

	open() {
	this.setState({ showModal: true });
	},
	register: function(e){

	e.preventDefault();
	console.log(this.refs.typeOfEventInput.value);
	$.ajax({
		url:'/api/v1/event',
		type: 'POST',
		data:{
			typeOfEvent: this.refs.typeOfEventInput.value,
			eventNotes:this.refs.eventNotesInput.value,
			followUpDate: this.refs.followUpDateInput.value,
			customerId: this.refs.customerIdInput.value,
			userId: window.user.id
		},
		dataType: 'json',
		headers: {
			Accept: 'application/json'
		},
		success: (successArg)=>{
			
			//$('form').children('input:not(#submit)').val('');
			
			browserHistory.push('/salesDash');
			window.reload();




		},
		error: (errorArg)=>{
			console.log('nope');
			this.setState({errors: errorArg.responseJSON});
		}
		});

		console.log('register code goes here');
	}
});






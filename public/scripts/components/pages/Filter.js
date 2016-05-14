import React from 'react';
import EventPreview from './../EventPreview';
import events from './../../collections/EventCollection';
import users from './../../collections/UserCollection';
import EventModel from './../../models/EventModel';
import $ from 'jquery';
import User from './../../models/User';
import Customer from './../../models/CustomerModel';



export default React.createClass({
	getInitialState: function(){
		return {
			event: new EventModel,
			error:'',
			salesReps:  new User,
			events: events,
			customer: new Customer,
			users: users,
			salesUserFilter: 'all',
			eventsTypeFilter: 'all',
			customerFilter: 'all',
			customerData: new Customer

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

			return (<div>Still loading</div>);
		}
		else if(!this.state.salesReps){

			return (<div>Still loading</div>);
		}

		else { 
			// console.log(this.stat.event.get(0).customer);
			
			const salesRepsOptions = this.state.salesReps.map((rep, i, array)=>{
				return(<option value={this.state.salesReps[i].id}>{this.state.salesReps[i].firstName+' '+this.state.salesReps[i].lastName}</option>);
			});
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
									followUpDate={this.state.event.get(i).followUpDate}/>
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
									followUpDate={this.state.event.get(i).followUpDate}/>
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
									followUpDate={this.state.event.get(i).followUpDate}/>
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
									followUpDate={this.state.event.get(i).followUpDate}/>
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
				console.log(this.state.event.get(0).user.firstName);				
				return (
					
		        	<div className="container">

		            	<h1>Events</h1>
		            	<form className="form-horizontal  col-sm-12 filter-form" onSubmit={this.getUsers}>
		            	<div className="form-group">
			            	<label  className="col-sm-3 control-label">Filter Events by Sales Rep</label>	
			            	<div className="col-sm-7">
				            	<select className="form-control" ref="salesUser">
										<option value='all'>All</option>
										{salesRepsOptions}		
								</select>
							</div>
						</div>
						<div className="form-group">
			            	<label  className="col-sm-3 control-label">Filter Events by Customer</label>	
			            	<div className="col-sm-7">
				            	<select className="form-control" ref="customerOptionSelection">
										<option value='all'>All</option>
										{customerOptions}		
								</select>
							</div>
						</div>
						<div className="form-group">
							<button className="button" type="submit">Filter/Update</button>
						</div>
						</form>
		            	<div className="col-sm-12">{eventsView}</div>
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
			salesUserFilter: this.refs.salesUser.value,
			customerFilter: this.refs.customerOptionSelection.value
			});
		console.log(this.state.event.get(0).user.id);
	}
});
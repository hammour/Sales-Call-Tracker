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
			users: users
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
	},


	render: function() {
		
		if(!this.state.event.get(0)||(!this.state.salesReps)){

			return (<div>loading</div>);
		}

		else { 
			
			const salesRepsOptions = this.state.salesReps.map((rep, i, array)=>{
				return(<option value={this.state.salesReps[i].id}>{this.state.salesReps[i].firstName}</option>);
			});
			const eventsView= events.map((event,i, array)=>{				
				return(
					<div >

						<EventPreview 
							firstName= {this.state.event.get(i).user.firstName}
							lastName= {this.state.event.get(i).user.lastName}
							eventNotes={this.state.event.get(i).eventNotes}
							customerName={this.state.event.get(i).customer.name}
							typeOfEvent={this.state.event.get(i).typeOfEvent}
							followUpDate={this.state.event.get(i).followUpDate}
						/>
	            	</div>
					); 
			});
								
				return (
					
		        	<div>

		            	<h1>Events</h1>
		            	<select className="form-control" ref="salesUser">
								<option value='all'>All</option>
								{salesRepsOptions}
								
							</select>
		            	<div>{eventsView}</div>
		        	</div>
		        );
	        }
	},	

	convertDay: (d)=>{
				var theDay = d.slice(0, 10).split('-'); 
				return theDay[1] +'/'+ theDay[2] +'/'+ theDay[0];
		},
	getUsers: function(e){
		
	}
});
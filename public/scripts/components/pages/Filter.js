import React from 'react';
import EventPreview from './../EventPreview';
import events from './../../collections/EventCollection';
import EventModel from './../../models/EventModel';
import $ from 'jquery';
import User from './../../models/User';
import Customer from './../../models/CustomerModel';


export default React.createClass({
	getInitialState: function(){
		return {
			event: new EventModel,
			error:'',
			salesRep: new User,
			events: events,
			customer: new Customer
		};
	},
	

	componentDidMount: function(){
		this.state.event.on('change', (eventData)=> {
			this.setState({event: this.state.event,
				salesRep: this.state.event.get('user'),
				customer: this.state.event.get('customer'),
				events:events
			});
			
			
		});
		this.state.event.fetch({
			data: {withRelated: ['customer','user']},
			error: (model, error) => {
				this.setState({error: error.responseJSON.message});
				}
			});
		this.state.events.fetch();
		
	},


	render: function() {

		if(!this.state.event.get(0)){
			return (<div>loading</div>);
		}

		else { 
			const eventsView= events.map((event,i, array)=>{
				return(
					<div >
			            	<div className="event-container">
			        		<div className="event-left-container">
				        		<img src='http://beacontechs.com/images/Haythem.png'/>
				        		<div className="sales-rep-name">{this.state.event.get(i).user.firstName}</div><div>{this.state.event.get(i).user.lastName}</div>
			        		</div>
			        		<div className="event-center-container">
				        		<h4>Event Notes</h4>
				        		<div className="events-remarks-notes">{this.state.event.get(i).eventNotes}</div>
			        		</div>
			        		<div className="event-right-container">
				        		<h4>Customer: {this.state.event.get(i).customer.name}</h4>
				        		<p>Type of Event: {this.state.event.get(i).typeOfEvent}</p>
				        		<h4>Follow up call</h4>
				        		<p type='date'>{this.convertDay(this.state.event.get(i).followUpDate)}</p>
			        		</div>
			        		</div>

		            	</div>
					); 
			});
				
				console.log(eventsView[1]);
				
				return (
		        	<div>
		            	<h1>Events</h1>
		            	<div>{eventsView}</div>
		        	</div>
		        );
	        }
	},	

	 convertDay: (d)=>{
				var theDay = d.slice(0, 10).split('-'); 
				return theDay[1] +'/'+ theDay[2] +'/'+ theDay[0];
				}
			});
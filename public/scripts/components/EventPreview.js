import React from 'react';

export default React.createClass({
	render: function() {
		return (
				<div className="event-container">
					<div className="event-left-container">
						<img src='http://beacontechs.com/images/Haythem.png'/>
						<div className="sales-rep-name">{this.props.userFirstName}</div><div>{this.props.userLastName}</div>
					</div>
					<div className="event-center-container">
						<h4>Event Notes</h4>
						<div className="events-remarks-notes">{this.props.eventNotes}</div>
					</div>
					<div className="event-right-container">
						<h4>Customer: {this.props.customerName}</h4>
						<p>Type of Event: {this.props.typeOfEvent}</p>
						<h4>Follow up call</h4>
						<p type='date'>{this.convertDay(this.props.followUpDate)}</p>
					</div>
				</div>
        );
	},
	convertDay: (d)=>{
				var theDay = d.slice(0, 10).split('-'); 
				return theDay[1] +'/'+ theDay[2] +'/'+ theDay[0];
		}
});


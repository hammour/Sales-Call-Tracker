import React from 'react';

export default React.createClass({
	render: function() {
		return (
        	<div className="event-container">
        		<div className="event-left-container">
	        		<img src={this.props.imgUrl}/>
	        		<div className="sales-rep-name">{this.props.saleRepName}</div>
        		</div>
        		<div className="event-center-container">
	        		<h4>Remarks/Notes</h4>
	        		<div className="events-remarks-notes">{this.props.eventNotes}</div>
        		</div>
        		<div className="event-right-container">
	        		<h4>{this.props.customerName}</h4>
	        		<h4>{this.props.typeOfEvent}</h4>
	        		<h4>Follow up call</h4>
	        		<h4>{this.props.followUpDate}</h4>
        		</div>

            	
        	</div>
        );
	}
});
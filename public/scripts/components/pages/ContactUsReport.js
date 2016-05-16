import React from 'react';
import contact from './../../models/Contact';
import $ from 'jquery';


export default React.createClass({
	getInitialState: function(){
		return {
			contact: new contact

		};
	},
	

	componentDidMount: function(){
		this.state.contact.on('change', (userData)=> {
			this.setState({contact: this.state.contact});});

		$.get('/api/v1/contact', (data)=>{
			this.setState({contact:data});
		});
		
	},


	render: function() {
		
		if (!this.state.contact[0]){
		 return (<div className="hidden">still loading</div>);
		}
		else{
			console.log(this.state.contact[0]);
			
			const contactUsAll = this.state.contact.map((rep,i,array)=>{
				
				return (
					<div key = {this.state.contact[i].id}>
					<form id = {this.state.contact[i].id} className="event-container col-sm-12" onSubmit={this.delete}>
						
						
						
							<h4 className="hidden">Customer ID: {this.state.contact[i].id}</h4>
							<h4>Contact Name: <span className="contact-details">{this.state.contact[i].name}</span></h4>
							<h4>Phone Number: <span className="contact-details">{this.state.contact[i].contactNo}</span></h4>
							<h4>Email Address: <span className="contact-details">{this.state.contact[i].email}</span></h4>
							<div  className="contact-message">
								<h4>Message:</h4>
								<p>{this.state.contact[i].message}</p>
							</div>
							<button type ="submit" className="delete">X DELETE</button>
					
	
					</form>
					</div>

			);
			});
		
		return(

			<div>
				<h2>Contact Us Report</h2>
				{contactUsAll}
			</div>)
		;}
		
	},	
	delete: (e)=>{
		// e.preventDefault();
		// console.log(e.target.id);
		$.ajax({

        url: '/api/v1/contact/'+e.target.id,
        type: 'DELETE',
        success: function(success){ 
        	console.log(success);

        }

        });
	}
});
import React from 'react';
import users from './../../collections/UserCollection';
import customer from './../../models/CustomerModel';
import $ from 'jquery';





export default React.createClass({
	getInitialState: function(){
		return {
			customer: new customer
		};
	},
	

	componentDidMount: function(){
		this.state.customer.on('change', (userData)=> {
			this.setState({customer: this.state.customer});});
		

		$.get('/api/v1/customer', (data)=>{
			this.setState({customer:data});
		});
		
	},


	render: function() {
		
		if (!this.state.customer[0]){
		 return (<div className="hidden">still loading</div>);
		}
		else{
			
			const customersAll = this.state.customer.map((rep,i,array)=>{
				
				return (
					<div key = {this.state.customer[i].id}>
					<form id = {this.state.customer[i].id} className="event-container col-sm-12" onSubmit={this.delete}>
						
						
						<div className = "col-sm-9">
							<h4>Customer ID: {this.state.customer[i].id}</h4>
							<h4>Customer Name: {this.state.customer[i].name}</h4>
							<h4>Contact Name: {this.state.customer[i].contactName}</h4>
							<h4>Email Address: {this.state.customer[i].email}</h4>
							
						</div>
						<div className = "col-sm-3">
							<button type ="submit" className="delete">X DELETE</button>
						</div>
					</form>
					</div>

			);
			});
		
		return(

			<div>
				<h2>Customers</h2>
				{customersAll}
			</div>)
		;}
		
	},	
	delete: (e)=>{
		// e.preventDefault();
		// console.log(e.target.id);
		$.ajax({

        url: '/api/v1/customer/'+e.target.id,
        type: 'DELETE',
        success: function(success){ 
        	console.log(success);

        }

        });
	}
});
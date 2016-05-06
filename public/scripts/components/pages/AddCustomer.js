import React from 'react';

import $ from 'jquery';
import{hashHistory} from 'react-router';
import customer from '../../models/CustomerModel';

export default React.createClass({
	getInitialState: function(){
		return {
			errors: {},
			customer: new customer
		};
	},
	render: function() {
		return (
			<section>
				<h1>Add Customer</h1>
				<form onSubmit={this.register}>
					<input type="text" placeholder="Customer Name"ref="name"/>
					<input type="text" placeholder="Contact Name" ref="contactName"/>
					<input type="text" placeholder="email" ref="email"/>
					<input type="text" placeholder="Address Line One"ref="addressLineOne"/>
					<input type="text" placeholder="Address Line Two"ref="addressLineTwo"/>
					<input type="text" placeholder="City"ref="city"/>
					<input type="text" placeholder="State"ref="state"/>
					<button type="submit">Register</button>
				</form>
			</section>
		);
	},
	register: function(e){
		e.preventDefault();
		$.ajax({
			url:'/api/v1/customer',
			type: 'POST',
			data:{
				name: this.refs.name.value,
				contactName:this.refs.contactName.value,
				email: this.refs.email.value,
				addressLineOne: this.refs.addressLineOne.value,
				addressLineTwo: this.refs.addressLineTwo.value,
				city: this.refs.city.value,
				state:this.refs.state.value,
				userId: 11
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
				hashHistory.push('/Dashboard');
			},
			error: (errorArg)=>{
				
				this.setState({errors: errorArg.responseJSON});
			}
		});
		//console.log('register code goes here');
	}

});



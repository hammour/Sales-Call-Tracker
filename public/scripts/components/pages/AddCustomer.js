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
			<div className="container">
				
				<form className="form-horizontal container col-sm-10 " onSubmit={this.register}>
					<h1>Add Customer</h1>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Customer Name</label>
							<div className="col-sm-7">
								<input className="form-control" type="text" placeholder="Customer Name"ref="name"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Contact Name</label>
							<div className="col-sm-7">
								<input className="form-control" type="text" placeholder="Contact Name" ref="contactName"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Email</label>
							<div className="col-sm-7">
								<input className="form-control" type="email" placeholder="email" ref="email"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Address Line 1</label>
							<div className="col-sm-7">
								<input className="form-control" type="text" placeholder="Address Line One"ref="addressLineOne"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Address Line 2</label>
							<div className="col-sm-7">
								<input className="form-control" type="text" placeholder="Address Line Two"ref="addressLineTwo"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">City</label>
							<div className="col-sm-7">
								<input className="form-control" type="text" placeholder="City"ref="city"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">State</label>	
							<div className="col-sm-7">
								<input className="form-control" type="text" placeholder="State"ref="state"/>
							</div>
						</div>
							<button className="btn-lg btn-default col-sm-offset-3" type="submit">Register</button>
				</form>
			</div>
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
				userId: window.user.id
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



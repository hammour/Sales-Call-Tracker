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
							<div className="col-sm-4">
								<input className="form-control" type="text" placeholder="Customer Name"ref="name"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Contact Name</label>
							<div className="col-sm-4">
								<input className="form-control" type="text" placeholder="Contact Name" ref="contactName"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Email</label>
							<div className="col-sm-4">
								<input className="form-control" type="email" placeholder="email" ref="email"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Address Line 1</label>
							<div className="col-sm-4">
								<input className="form-control" type="text" placeholder="Address Line One"ref="addressLineOne"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">Address Line 2</label>
							<div className="col-sm-4">
								<input className="form-control" type="text" placeholder="Address Line Two"ref="addressLineTwo"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">City</label>
							<div className="col-sm-4">
								<input className="form-control" type="text" placeholder="City"ref="city"/>
							</div>
						</div>
						<div className="form-group">
							<label  className="col-sm-3 control-label">State</label>	
							<div className="col-sm-4">
								
								<select className="form-control" placeholder="State"ref="state">
									<option value="AL">Alabama</option>
									<option value="AK">Alaska</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">District Of Columbia</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
								</select>
							</div>
						</div>
						<button className="button" type="submit">Add Customer</button>

				</form>
			</div>
		);
	},
	register: function(e){
		console.log(this.refs.state.value);
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



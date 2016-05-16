import React from 'react';
//import  cloudinary from 'cloudinary';
import fs from 'fs';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from '../../models/User';
//import filepicker from 'filepicker-js';

export default React.createClass({
	getInitialState: function(){
		return {
			errors: {},
			user: new user,
			uploadImageUrl:'/images/genaric-image.png'
		};
	},
	render: function() {
		return (
			<div className="container">
				<h1>Register New User</h1>
				<div className="col-sm-12 ">
					<div className="profile-thumb">
						<img src={this.state.uploadImageUrl}/>
					</div>
					<button className="button-image-upload" onClick={this.uploadImage}>Upload Image</button>
				</div>
				<form className="form-horizontal  col-sm-12 " onSubmit={this.register}>
				
					
					<div className="form-group">
						
						<label for="input11" className="col-sm-2 control-label">First Name</label>
						<div className="col-sm-4">
							<input className="form-control" id="input11" type="text" placeholder="first name"ref="firstName"/>
						</div>
					</div>

					<div className="form-group">
						<label for="input12" className="col-sm-2 control-label">Last Name</label>
						<div className="col-sm-4">
							<input className="form-control" id="input12" type="text" placeholder="last name" ref="lastName"/>
						</div>
					</div>

					<div className="form-group">
						<label for="input13" className="col-sm-2 control-label">Email</label>
						<div className="col-sm-4">
							<input className="form-control" id="input13" type="email" placeholder="email" ref="email"/>
						</div>
					</div>
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>
					
					<div className="form-group">
						<label for="input14" className="col-sm-2 control-label">Password</label>
						<div className="col-sm-4">
							<input className="form-control" id="input14" type="password" placeholder="password" ref="password" />
						</div>
					</div>
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					
					<div className="form-group">
						<label for="input15" className="col-sm-2 control-label">User Type</label>
						<div className="col-sm-4">
							<select className="form-control" placeholder="State"ref="userType">
								<option value="admin">Admin</option>
								<option value="salesManager">Sales Manager</option>
								<option value="salesRep">Sales Rep</option>
							</select>
						</div>
					</div>
					<button className="button" type="submit">Register</button>

				</form>
				
			</div>
		);
	},
	register: function(e){
		e.preventDefault();
		$.ajax({
			url:'/auth/register',
			type: 'POST',
			data:{
				email: this.refs.email.value,
				password:this.refs.password.value,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				userType: this.refs.userType.value,
				imageUrl: this.state.uploadImageUrl
			},
			dataType: 'json',
			headers: {
				Accept: 'application/json'
			},
			success: (successArg)=>{
				// console.log(successArg);
				// console.log('success');
				//this.state.user.set(registeredUser);
				// console.log(this.state.user);
				browserHistory.push('/login');
			},
			error: (errorArg)=>{
				
				this.setState({errors: errorArg.responseJSON});
			}
		});
		console.log(this.state.uploadImageUrl);
	},
	uploadImage: function (){
		filepicker.setKey('Ad5v3QpWkQQyguPxuvIEzz');

		 
		  filepicker.pickAndStore(
			  {
			    openTo: '/images',
			    container: 'window'
			  },
			  
			  (Blobs)=>{
			    
			    this.setState({uploadImageUrl:(Blobs[0].url)});
			    console.log( Blobs[0].url);

			  },
			   (msg)=>{
			  	this.setState({uploadImageUrl:(msg[0].url)});
			  },
			  (error)=>{
			 	// console.log(JSON.stringify(error)); //- print errors to console
			  },
			  (progress)=>{
			   // console.log(JSON.stringify(progress));
			  }
			);
		  //console.log(this.state.uploadImageUrl);
		
		// cloudinary.config({ 
		// 		  cloud_name: 'hammour', 
		// 		  api_key: '577792281997717', 
		// 		  api_secret: 'MotBEtLBP5rkb-NfdcTWhB0id2A' 
		// 		});

		// cloudinary.uploader.upload('http://localhost:3000/public/images/genaric-image.png', function(result) { 
		// 		  console.log(result);
		// 		});


		}

});






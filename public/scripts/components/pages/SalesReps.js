import React from 'react';
import users from './../../collections/UserCollection';
import user from './../../models/User';
import $ from 'jquery';





export default React.createClass({
	getInitialState: function(){
		return {
			salesReps: new user,
			users: users,
			userDelete:''
		};
	},
	

	componentDidMount: function(){
		this.state.salesReps.on('change', (userData)=> {
			this.setState({salesReps: this.state.user});});
		

		$.get('/api/v1/user', (data)=>{
			this.setState({salesReps:data});
		});
		
	},


	render: function() {
		
		if (!this.state.salesReps[0]){
		 return (<div>still loading</div>);
		}
		else{
			
			const salesRepsAll = this.state.salesReps.map((rep,i,array)=>{
				
				return (
					<div key = {this.state.salesReps[i].id}>
					<form id = {this.state.salesReps[i].id} className="event-container col-sm-7" onSubmit={this.delete}>
						<div className ="profile-thumb col-sm-3">
							<img src="http://beacontechs.com/images/Haythem.png"/>	
						</div>
						
						<div className = "col-sm-6">
							<h4>User ID: {this.state.salesReps[i].id}</h4>
							<h4>First Name: {this.state.salesReps[i].firstName}</h4>
							<h4>Last Name: {this.state.salesReps[i].LastName}</h4>
							<h4>Email: {this.state.salesReps[i].email}</h4>
						</div>
						<div className = "col-sm-3">
							<button type ="submit" className="button">X DELETE</button>
						</div>
					</form>
					</div>

			);
			});
		
		return(

			<div>
				<h2>Sales Reps</h2>
				{salesRepsAll}
			</div>)
		;}
		
	},	
	delete: (e)=>{
		// e.preventDefault();
		// console.log(e.target.id);
		$.ajax({

        url: 'http://localhost:3000/api/v1/user/'+e.target.id,
        type: 'DELETE',
        success: function(success){ 
        	console.log(success);

        }

        });
	}
});
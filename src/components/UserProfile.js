import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';

class UserProfile extends Component {
	state = {
		routines: []
    };
 
    
componentDidMount (){
	this.fetchUserRoutines();
	this.showRoutines();
}

// componentWillReceiveProps(props){
// 	this.fetchUser();
// }


fetchUserRoutines = () => {

	Axios.get('http://localhost:5000/api/routines/', {withCredentials: true})
    .then((routinesfromapi)=>{
		console.log('ooooOOOOOoooooOOOOOoOOOOoOoOOOOOooOOOOOOoO', routinesfromapi)
		
		this.setState({
			
			routines: routinesfromapi.data
	 
			})
			
		})
		.catch((err)=>{
			
		})
		
	}

	showRoutines = ()=>{
		console.log(this.state.routines)
		console.log(typeof this.state.routines)
		let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thurday', 'friday', 'saturday']
		let routines = this.state.routines[0]
		console.log(routines)
		if(!routines){
			return;
		}
		return days.map((day)=>{
		 //for(let d=0; d < days.length; d++) {
			//let day = days[d]
			console.log(day)
			if(routines[day]){
				//continue;
			return routines[day].map((routine)=>{
				console.log(routine)
				return (
					<div>
					<h2>{day}</h2>
					<h3>{routine.title}</h3>
					<img src={routine.image}/>
					</div>
				)

			})
		}

		})
		/*let days = []
		return this.state.routines.map((day)=>{
				console.log(day)
		})*/
	}

	render() {
		console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~',this.state, this.props)
		return (

            <div>
            <h1>HELP HELP HELP HELP BOOBS!</h1>
{console.log('HTIS IS THE USER PROFILE')}

{console.log('THIS IS THE STATE AND ROUTINE =>',this.state.routines, this.props)}

	{this.showRoutines()}


        </div>
            )
	}
}


export default UserProfile;
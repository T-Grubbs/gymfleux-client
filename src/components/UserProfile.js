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


	deleteRoutine = (day) => {

		Axios.post('http://localhost:5000/api/routines/delete', {day: day}, {withCredentials:true})
			.then(() => {
				//this.props.history.push('/profile');
				window.location.reload()
			})
			.catch(() => {});
	};



	showEachDay = (thisDay) => {
		return thisDay.map((routine)=>{
			console.log(routine)
			return (
				<div className="exercise">
				<h3>{routine.title}</h3>
				<img className="exercise-img" src={routine.image}/>
				</div>
			)

		})
	}

	showRoutines = ()=>{
		console.log(this.state.routines)
		console.log(typeof this.state.routines)
		let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
		let routines = this.state.routines[0]
		console.log(routines)
		if(!routines){
			return;
		}
		return days.map((day)=>{

			if(routines[day]){
			
				return <div className="day">
							<h3>{day}</h3>
							 <button onClick={()=>{this.deleteRoutine(day)}}>Delete</button>
							 {this.showEachDay(routines[day])}
						</div>

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


		<div className="calendar">
			{this.showRoutines()}
		</div>


        </div>
            )
	}
}


export default UserProfile;
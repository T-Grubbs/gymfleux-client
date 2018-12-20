import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import ExerciseIndex from '../components/ExerciseIndex';
import RoutineService from '../services/RoutineService';
import { Route, Switch, Link } from 'react-router-dom';

class Routines extends Component {
	state = {
		user: '',
		weekday: '',
		dateCreated: '',
		allRoutines: []
	};

	// this.props.theExercise

	componentWillMount() {
		this.fetchRoutines();
	}

	fetchRoutines = () => {
		Axios.get('http://localhost:5000/api/routines', { withCredentials: true })
			.then((responseFromApi) => {
				this.setState({ allRoutines: responseFromApi.data.reverse() });
			})
			.catch((err) => {});
	};

	deleteRoutine = () => {
		Axios.post('http://localhost:5000/api/routines/delete/' + this.state.allRoutines._id, {})
			.then(() => {
				this.props.history.push('/profile');
			})
			.catch(() => {});
	};

	addExercise = (theRoutine) => {
		Axios.post('http://localhost:5000/api/routines/edit/' + theRoutine._id, {
			theExerciseToAdd: this.props.theExercieID
		})
			.then((responseFromApi) => {})
			.catch((err) => {});
	};

	showRoutines = () => {
		return this.state.allRoutines.map((eachRoutine) => {
			console.log('-=-=-=-=-=-=-=-=-', eachRoutine);
			return <button onClick={() => this.addExercise(eachRoutine)}>{eachRoutine.allRoutines}</button>;
		});
	};

	render() {
		return <div>{this.showRoutines()}</div>;
	}
}

export default Routines;

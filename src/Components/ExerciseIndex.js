import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class ExerciseIndex extends Component {
	state = {
		allTheExercises: []
	};

	componentWillMount() {
		this.fetchExercises();
	}

	fetchExercises = () => {
		Axios.get('https://desolate-garden-11056.herokuapp.com/api/exercises')
			.then((responseFromApi) => {
				this.setState({ allTheExercises: responseFromApi.data.reverse() });
			})
			.catch((err) => {});
	};

	showLowerBody = () => {
		if (this.state.allTheExercises) {
			let lowerBody = [];

			const myExercises = this.state.allTheExercises.filter((eachExercise) => {
				if (
					eachExercise.primary === 'quadriceps' ||
					eachExercise.primary === 'hamstrings' ||
					eachExercise.primary === 'calves' ||
					eachExercise.primary === 'glutes'
				) {
					lowerBody.push(eachExercise);
				}

				return eachExercise;
			});

			return lowerBody.map((eachExercise) => {
				return (
					<div className="lower-body-column" key={eachExercise._id}>
						<h3>{eachExercise.title}</h3>
						<h6>{eachExercise.primary}</h6>
						<Link to={'/exercise/details/' + eachExercise._id}>See Details</Link>
						<hr />
					</div>
				);
			});
		}
	};

	showUpperBody = () => {
		let upperBody = [];
		const myExercises = this.state.allTheExercises.filter((eachExercise) => {
			if (
				eachExercise.primary === 'chest' ||
				eachExercise.primary === 'abs' ||
				eachExercise.primary === 'trapezius' ||
				eachExercise.primary === 'biceps' ||
				eachExercise.primary === 'triceps' ||
				eachExercise.primary === 'upper back' ||
				eachExercise.primary === 'shoulders'
			) {
				upperBody.push(eachExercise);
			}
			return eachExercise;
		});
		return upperBody.map((eachExercise) => {
			return (
				<div key={eachExercise._id}>
					<div className="transparentBG">
						<h3>{eachExercise.title}</h3>
						<h6>{eachExercise.primary}</h6>
						<Link to={'/exercise/details/' + eachExercise._id}>See Details</Link>
						<hr />
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div className="">
				<div className="exercisePage">
			
				<div className='twoExercises'>

					
						<div className="upperBody columns">{this.showUpperBody()}</div>
					

					
						<div className="lowerBody columns">{this.showLowerBody()}</div>
					
				</div>
				</div>
			</div>
		);
	}
}

export default ExerciseIndex;

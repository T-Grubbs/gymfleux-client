import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Routines from '../components/Routines';
import User from '../components/User'

class SingleExercise extends Component {
	state = {
		titleInput: '',
		primaryInput: '',
		secondaryInput: '',
		typeInput: '',
		imageInput: '',
		sunday: false,
		monday:false,
		tuesday:false,
		wednesday:false,
		thursday: false,
		friday: false,
		saturday: false

	};

	componentWillMount() {
		const theID = this.props.match.params.id;
		console.log('JFEFFHGRRGSHFEFGSHFHEFGDFSFEGSHFHEFGFD', theID);
		Axios.get('https://desolate-garden-11056.herokuapp.com/api/exercise/details/' + theID)
			.then((exerciseFromApi) => {
				console.log('------___---__-_-_--_-_-__-_-_-_-_-___-_-----', exerciseFromApi);

				this.setState({
					titleInput: exerciseFromApi.data.title,
					primaryInput: exerciseFromApi.data.primary,
					secondaryInput: exerciseFromApi.data.secondary,
					typeInput: exerciseFromApi.data.type,
					imageInput: exerciseFromApi.data.image
				});
			})
			.catch((err) => {
				console.log('~~~~~~~~~~~~~~~~~', err);
			});
	}

	handleChange = (e) => {
		console.log(e.target.value)
		//console.log(this.state)
		//set state to be opposite what it was 

		this.setState({
			[e.target.value]:!this.state[e.target.value]
		})
	}

	handleSubmit = (e) => {
		e.preventDefault() 
		console.log(this)
		const theID = this.props.match.params.id;
		//const theDay = this.state.

		Axios.post('https://desolate-garden-11056.herokuapp.com/api/routines/details/' + theID, {state: this.state}, {withCredentials:true})
			.then((exerciseFromApi)=>{
					console.log(exerciseFromApi, 'EXERCISE FROM API EXERCISE FROM API EXERCISE FROM API EXERCISE FROM API')
				//this.setState({[e.target.value]: this.sate})
				this.props.history.push('/profile')

			})

	}

	addExerciseToRoutine = (e) => {
		return this.setState({

		})
	}

	showExerciseDetails = () => {
		return (
			<div>
				<div>
					<h1>{this.state.titleInput}</h1>
					<h3>
						Primary Muscle: {this.state.primaryInput}
					</h3>
					 <h4>
						Secondary: {this.state.secondaryInput}
					 </h4>
					 <h4>
					 Type: {this.state.typeInput}
					 </h4>

				</div>

				<div>
					<img  className='exercise-img' src={this.state.imageInput} alt="Example" />
				</div>
			</div>
		);
	};

	showForm = () => {
		if (this.state.formShowing) {
			return (
				<div  className='details-border'>
					
					<Routines theExercieID={this.props.match.params.id} />
	

	


<form onSubmit={this.handleSubmit}>
<div >
<br />
<br />
<br />
<br />
  <input  type="radio" name="Sunday" value="sunday" onChange={(e) => this.handleChange(e)}/>Sunday
  <input  type="radio" name="Monday" value="monday" onChange={(e) => this.handleChange(e)}/>Monday
  <input type="radio" name="Tuesday" value="tuesday" onChange={(e) => this.handleChange(e)}/>Tuesday
  <input type="radio" name="Wednesday" value="wednesday" onChange={(e) => this.handleChange(e)}/>Wednesday
  <input type="radio" name="Thursday" value="thursday" onChange={(e) => this.handleChange(e)}/>Thursday
  <input type="radio" name="Friday" value="friday" onChange={(e) => this.handleChange(e)}/>Friday
  <input type="radio" name="Saturday" value="saturday" className='goldLetters'  onChange={(e) => this.handleChange(e) } />Saturday
  <input className="del-btn" type="submit" value="Submit" />
</div>
  </form>







					{/* <button className="button is-info"> Submit </button> */}
				</div>
			);
		}
	};

	toggleForm = () => {
		this.setState({ formShowing: !this.state.formShowing });
	};

	showWeekdays = () => {
		return <button className="button" />;
	};

	render() {
		return (
			<div className="exerciseDetails detailsBorder single-exercise">
				

				<div className=" marginLeftAndRight">
					{this.showExerciseDetails()}

					<div />
				</div>
				<div >
					

					<button className="button" type="submit" onClick={this.toggleForm}>
						Add to Routine
					</button>
					{this.showForm()}

					<br />
					<br />
					<br />
					<div className="emoji">
						<button type="button" className="emojiButton">
							💪
						</button>
						like button
					</div>
				</div>
			</div>
		);
	}
}

export default SingleExercise;

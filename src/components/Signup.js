import React, { Component } from 'react';
import '../App.css';
//import ExerciseIndex from './components/ExerciseIndex';
import { Route, Switch, Link } from 'react-router-dom';
//import SingleExercise from './components/SingleExercise';
// Signup from './components/Signup';
import UserService from '../services/UserService';
//import Login from './components/Login';

class Signup extends Component {
    state = { 
        usernameInput: '', 
        passwordInput: '',
        heightInput: '',
        weightInput: '',
        dateOfBirthInput: '',
		bioInput: '',
		sundayRoutine: [],
		mondayRoutine: [],
		tuesdayRoutine: [],
		wednesdayRoutine: [ 'HEHEHEHEHEHEHEh' ],
		thursdayRoutine: [],
		fridayRoutine: [],
		saturdayRoutine: [],
		profilePic: ''

 };
	service = new UserService();

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleFormSubmit = (e) => {
		e.preventDefault();


		this.service
			.signup(this.state.usernameInput, this.state.passwordInput, this.state.heightInput, this.state.weightInput, this.state.dateOfBirthInput, this.state.bioInput)
			.then((userFromDB) => {
				console.log('------------------------', userFromDB);
				this.props.logTheUserIntoAppComponent(userFromDB);
				
				this.setState({ usernameInput: '', passwordInput: '' });

				this.props.history.push('/exercise-index');
			})
			.catch((err) => {
				console.log('sorry something went wrong', err);
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
                
					<label>Username:</label>
					<input
						type="text"
						name="usernameInput"
						value={this.state.usernameInput}
						onChange={(e) => this.handleChange(e)}
					/>

					<label>Password:</label>
					<input
						type="text"
						name="passwordInput"
						value={this.state.passwordInput}
						onChange={(e) => this.handleChange(e)}
					/>

                    <label>Height:</label>
                    <input
                        type="text"
                        name="heightInput"
                        value={this.state.heightInput}
                        onChange={(e)=> this.handleChange(e)}
                        />

                        <label>Weight:</label>
                    <input
                        type="text"
                        name="weightInput"
                        value={this.state.weightInput}
                        onChange={(e)=> this.handleChange(e)}
                        />
                          <label>Bio:</label>
                        <input
                            type="textfield"
                            name="bioInput"
                            value={this.state.bioInput}
                            placeholder="Tell us about your #gymfleux"
                            onChange={(e)=> this.handleChange(e)}
                        />


					<input type="submit" value="Signup" />
				</form>

				<p>
					Already have account?
					<Link to={"/"}> Login</Link>
				</p>
			</div>
		);
	}
}

export default Signup;

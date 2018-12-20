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
			<div className='signup-bg'>
				<div className='signup-page'>

				<form onSubmit={this.handleFormSubmit}>
                
					<label>Username:</label>
					<input
						type="text"
						name="usernameInput"
						placeholder='username'
						value={this.state.usernameInput}
						onChange={(e) => this.handleChange(e)}
						/>
					<br />
					<label>Password:</label>
					<input
						type="text"
						name="passwordInput"
						placeholder='password'
						value={this.state.passwordInput}
						onChange={(e) => this.handleChange(e)}
						/>
<br />
                    <label>Height:</label>
                    <input
                        type="text"
						name="heightInput"
						placeholder='height'
                        value={this.state.heightInput}
                        onChange={(e)=> this.handleChange(e)}
                        />
					<br />
                        <label>Weight:</label>
                    <input
                        type="text"
						name="weightInput"
						placeholder='weight'
                        value={this.state.weightInput}
                        onChange={(e)=> this.handleChange(e)}
                        />
                          <label>Bio:</label>
                        <input
                            type="textfield"
                            name="bioInput"
                            value={this.state.bioInput}
                            placeholder=" #gymfleux"
                            onChange={(e)=> this.handleChange(e)}
							/>

						<br />

					<button className='button' type="submit" value="Signup" >Signup</button>
				</form>

				<p>
					Already have account?
					<Link to={"/"}> Login</Link>
				</p>
							</div>
			</div>
		);
	}
}

export default Signup;

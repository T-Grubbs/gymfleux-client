import React, { Component } from 'react';
import '../App.css';
//import Axios from 'axios';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

class Login extends Component {
	state = { usernameInput: '', passwordInput: '' };

	userService = new UserService();

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		this.userService.login(this.state.usernameInput, this.state.passwordInput)
			.then((userFromDB) => {
				// here we wait for the API to give us the user object back after logging in
				this.setState({ usernameInput: '', passwordInput: '' });

				// then we pass that user object back to app component
				this.props.logTheUserIntoAppComponent(userFromDB);
				// here, we are getting the user object from the DB
				// and we're setting AppComponent.state.loggedinuser equal to it

				this.props.history.push('/');
				// then we redirect
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
						name="passwordInput"
						value={this.state.passwordInput}
						onChange={(e) => this.handleChange(e)}
					/>

					<button className='button' type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default Login;

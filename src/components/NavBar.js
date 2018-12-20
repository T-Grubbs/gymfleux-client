import React, { Component } from 'react';
import '../App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Login from '../components/Login';
import UserService from '../services/UserService';
import ExerciseIndex from '../components/ExerciseIndex';
import Signup from '../components/Signup';
import SingleExercise from './SingleExercise';
import UserProfile from '../components/UserProfile';

class NavBar extends Component {
	state = {
		loggedInUser: null
	};

	render() {
		return (
			<nav className="fixed-top navbar flex-end">
            <img className='nav-logo' src='../images/gymfleuxlogo.png' alt='logo' />
				{this.props.showUser()}

				<ul class="nav justify-content-center">
					<li class="nav-item">
						<Link class="nav-link" to="/">
							Home
						</Link>
					</li>
                    <li class="nav-item">
						<Link class="nav-link" to="/profile">
							Profile
						</Link>
					</li>



					<li class="nav-item">
						<Link class="nav-link" to="/exercise-index">
							Exercises
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/signup">
							Signup
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/login">
							Login
						</Link>
					</li>
                    <li class="nav-item">
						<Link class="nav-link" to="/logout">
							Logout
						</Link>
					</li>
				</ul>

				{/* <Link to="/exercise-index"> Check out our exercises</Link>
    <Link to="/signup"> Sign up for a profile</Link>
    <Link to="/login"> Login </Link>
    <button onClick={this.logout}>Logout</button>
*/}
			</nav>
		);
	}
}

export default NavBar;
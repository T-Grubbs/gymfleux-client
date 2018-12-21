import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import { Route, Switch, Link } from 'react-router-dom';
import UserService from './services/UserService';
import ExerciseIndex from './components/ExerciseIndex';
import Signup from './components/Signup';
import SingleExercise from './components/SingleExercise';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import Login from './components/Login';

class App extends Component {
	state = {
		loggedInUser: null,
		formShowing: false
	};
	service = new UserService();

	componentDidMount(props) {
		this.fetchUser();
	}

	fetchUser() {
		this.service
			.loggedin()
			.then((theActualUserFromDB) => {
				this.setState({
					loggedInUser: theActualUserFromDB
				});
			})
			.catch((err) => {
				console.log('catch getting hit');
				this.setState({
					loggedInUser: false
				});
			});
	}

	logInTheUser = (userToLogIn) => {
		this.setState({ loggedInUser: userToLogIn });
	};

	showUser = () => {
		if (this.state.loggedInUser) {
			return <div> Welcome {this.state.loggedInUser.username}</div>;
		}
	};

	logout = () => {
		this.service.logout().then(() => {
			this.setState({ loggedInUser: null });
		});
	};

	render() {
		console.log(this.state);
		return (
			<div className="topPadding">
				<NavBar showUser={this.showUser} />
				<Switch>
					<Route
						path="/exercise-index"
						render={(props) => <ExerciseIndex {...props} currentUser={this.state.loggedInUser} />}
					/>

					<Route path="/exercise/details/:id" component={SingleExercise} />

					<Route
						path="/signup"
						render={(props) => <Signup {...props} logTheUserIntoAppComponent={this.logInTheUser} />}
					/>
					<Route
						path="/login"
						render={(props) => <Login {...props} logTheUserIntoAppComponent={this.logInTheUser} />}
					/>
					<Route
						exact path ="/" 
						render={(props) => <Main {...props} logTheUserIntoAppComponent={this.logInTheUser} />}
					/>
					<Route 
						path="/profile"
						render={(props) => <UserProfile userPassedToProfile={this.state.loggedInUser} />} />

				</Switch>
			</div>
		);
	}
}

export default App;

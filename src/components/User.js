import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class UserRoutines extends Component {
	state = {
		sunday: [],
		monday: [],
		tuesday: [],
		wednesday: [],
		thursday: [],
		friday: [],
		saturday: [],
		profilePic: ''
	};

    addToRoutine = (routineDay, routineArr) =>{
        return this.setState({
            routineDay: routineArr.push('')
    })
}


	render() {
        return <div>
            
        {this.state.wednesdayRoutine}
          
        </div>;
	}
}

export default UserRoutines;

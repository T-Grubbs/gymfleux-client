import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class UserRoutines extends Component {
	state = {
		sundayRoutine: [],
		mondayRoutine: [],
		tuesdayRoutine: [],
		wednesdayRoutine: [],
		thursdayRoutine: [],
		fridayRoutine: [],
		saturdayRoutine: [],
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

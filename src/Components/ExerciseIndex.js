
import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import {Link} from 'react-router-dom';

class ExerciseIndex extends Component{
    state={
        allTheExercises: []
    }

    // keep in mind, the first time the render function runs, the state will look exactly like we set it up in the contstructor above
    // so since we are doint this.state.alltheProject.map, equalling to an empty array in the beginning is a clever trick because
    // this first time the component renders, the state will have an empty array and will loop through that empty array and show nothing
    // you will not see this because it happens very quickly
    // however, if we do start out be equalling our this.state.alltheProjects to an empty array,
    // we will get an error because we are trying to do .map on null, but you are not allowed to do that

// componentWillMount runs everytime the component is about to be rendered on the page
// in this function, we will make an axios request to our api route
// the response we ge back should be equal to an object with a .data key inside it, and that .data will be equal to all the tasks from our API

    componentWillMount(){
       this.fetchExercises()
    }


    fetchExercises = () =>{
        Axios.get('http://localhost:5000/api/tasks')
        .then((responseFromApi)=>{
            this.setState({allTheExercises: responseFromApi.data.reverse()}) 
            // .reverse is just so we see the newest tasks at the top of the page
            // once we get all the tasks, we set the state so that the state will have all the tasks in there
        })
        .catch((err)=>{
        })
    }


    // because componentWillMount will still allow the component to intialize before running, we can protect ourselves
    // by putting an if statement before anytime we want to loop through something in our state
    showAllExercises = () => {
        if(this.state.allTheExercises && this.props.currentUser){

            const myExercises = this.state.allTheExercises.filter((eachExercise)=>{
                return eachExercise.owner === this.props.currentUser._id
            })

            // once we have all the tasks in the state, we can map through them as we normally do
            return myExercises.map((eachExercise)=>{
                return(
                    <div key={eachExercise._id}>
                    <h3>{eachExercise.title}</h3>
                    <h6>{eachExercise.description}</h6>
                    <Link to={'/project/'+ eachExercise._id} >See Details</Link>
                </div>
            )
        })
        }
    }



    render(){
      
        return(
            <div>
            <h1>Exercises</h1>

            <div className="list-of-projects-container">
            {this.showAllExercises()}
            </div>


            <div className="add-new-component-container">
            <AddNewProject letTheIndexComponentKnowThatWeAddedAProject = {this.fetchExercises} />
            {/* we pass in this function so that after we add a new project in the addNewProject component */}
            {/* that component will be able to tell this component to go check for new projects */}
            </div>


            </div>
        )
    }



}


export default ExerciseIndex;
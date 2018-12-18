import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div className="">
				<div className="App landing-page bigMarginLeft ">
					<header className="">
						<img src="../images/barbellsX.png" className="App-logo" alt="logo" />
					</header>

					<img className="bigLogo" src="../images/gymfleuxlogo.png" alt="logo" />
				</div>
				<hr />
				<div className="organize-section">
					<section>
						<div className="organize-title">
							<h1>Organize your workouts!!</h1>
							<p>Select your workouts from our exercise list and for each day of the week!</p>
						</div>
						<div className="organize-img">
							<img
								className="img-border"
								src="https://dannykennedyfitness.com/wp-content/uploads/2016/04/Barbell-Squat.png"
								alt=""
							/>
							<img
								className="img-border calendar-bg"
								src="https://cdn.iconscout.com/icon/premium/png-256-thumb/workout-schedule-1-539287.png"
								alt="workout Calendar"
							/>
							<img
								className="img-border"
								src="https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Bodyweight_Walking_Lunge1.png"
								alt=""
							/>
						</div>
					</section>
				</div>
				<div>
					<hr />
					<div className="gold-bg">
						<h1>It's No Sweat!!</h1>

						<p>we provide the workout with easy to read images for instructions</p>
						<div className="img-section">
							<img
								className="image-resize"
								src="https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Sit-up_F_WorkoutLabs.png"
								alt=""
							/>

							<img
								className="image-resize"
								src="https://exerciseeggheads.files.wordpress.com/2018/01/pushup.png?w=980"
								alt=""
							/>

							<img
								className="image-resize"
								src="https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Pullup.png"
								alt=""
							/>

							<img
								className="image-resize"
								src="https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Barbell_Curl.png"
								alt=""
							/>

							<img
								className="image-resize"
								src="http://www.vitalsupp.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-21-at-11.25.21-PM.png"
								alt=""
							/>

							<img
								className="image-resize"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2Xj0wzv7R4bsnYGX9xn33JSx3eOZNF4Jjg0qQGyaE_3arAFe"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;

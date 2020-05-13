import React, { Component } from 'react'
import ScoreList from './ScoreList'
import './HighScore.css'



class HighScore extends Component {
	constructor(props) {
		super(props)

		this.state = {
			scores:'',
			scoreListOpen: false
		}
	}

	componentDidMount() {
		this.getScores("all")
	}

	getScores = (name) => {

		const scores = [
			{	
				id: 1,
				owner: {
					username: "frank"
				},
				high_score: 10,
				rank: 2,
				difficulty: "easy",
				date: "May 05, 2020"
			},
			{
				id: 2,
				owner: {
					username: "mike"
				},
				high_score: 8,
				rank: 1,
				difficulty: "easy",
				date: "May 05, 2020"
			},
			{
				id: 3,
				owner: {
					username: "josh"
				},
				high_score: 5,
				rank: 3,
				difficulty: "easy",
				date: "May 05, 2020"
			},
			{	
				id: 4,
				owner: {
					username: "James"
				},
				high_score: 10,
				rank: 2,
				difficulty: "intermediate",
				date: "May 05, 2020"
			},
			{
				id: 5,
				owner: {
					username: "Tom"
				},
				high_score: 32,
				rank: 1,
				difficulty: "hard",
				date: "May 05, 2020"
			},
			{
				id: 6,
				owner: {
					username: "Tim"
				},
				high_score: 48,
				rank: 3,
				difficulty: "hard",
				date: "May 05, 2020"
			}
		]

		// we need to check if the parameter is = to all, easy, intermediate or hard
		if(name === "all") {
			this.setState({
				scores: scores,
				scoreListOpen: true
			})
		} else if(name === "easy") {
			const easyScores = []

			for(let i = 0; i < scores.length; i++) {

				if(scores[i].difficulty === "easy") {
					// console.log(scores[i]);
					easyScores.push(scores[i])
				}
			}
			// 
			this.setState({
				scores: easyScores
			})
		} else if(name === "intermediate") {
			const interScores = []

			for(let i = 0; i < scores.length; i++) {

				if(scores[i].difficulty === "intermediate") {
					// console.log(scores[i]);
					interScores.push(scores[i])
				}
			}
			// 
			this.setState({
				scores: interScores
			})
		} else if(name === "hard") {
			const hardScores = []

			for(let i = 0; i < scores.length; i++) {

				if(scores[i].difficulty === "hard") {
					// console.log(scores[i]);
					hardScores.push(scores[i])
				}
			}
			// 
			this.setState({
				scores: hardScores
			})
		}


	}


	 // this method will allow us to filter the scores (all, easy, intermediate, hard)
	filterScores = (e) => {

		this.getScores(e.target.name)
	}


	render() {

		return(
			<div className="highscore-container">
				
				<h2>HighScore Container</h2>

				<div>
					<button>Home</button>
					<button>About</button>
					
				</div>

				<form>
					<input 
						type="text"
						placeholder="Search"
						name="search"/>
					
				</form>

				<div className="filter">
					<div>
						<label>All</label>
						<input
							type="checkbox"
							name="all"
							onChange={this.filterScores}
						/>
					</div>

					<div>
						<label>Easy</label>
						<input
							type="checkbox"
							name="easy"
							onChange={this.filterScores}
						/>
					</div>

					<div>
						<label>Intermediate</label>
						<input
							type="checkbox"
							name="intermediate"
							onChange={this.filterScores}
						/>
					</div>

					<div>
						<label>Hard</label>
						<input
							type="checkbox"
							name="hard"
							onChange={this.filterScores}
						/>
					</div>
				</div>

				<div className="list-container">
					{this.state.scoreListOpen?
					<ScoreList scores={this.state.scores}/>
					: null
					}
				</div>
				
			</div>
			)

	}
}



export default HighScore
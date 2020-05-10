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
			}
		]

		this.setState({
			scores: scores,
			scoreListOpen: true
		})

	}

	filterScores = (e) => {
		console.log(e.target.name)
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
							onChange={this.filterScoresd}
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
import React, { Component } from 'react'
import ScoreList from './ScoreList'
import SearchForm from './SearchForm'
import './HighScore.css'
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';



class HighScore extends Component {
	constructor(props) {
		super(props)

		this.state = {
			scores:'',
			scoreListOpen: false,
			showing: ''
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
				scoreListOpen: true,
				showing: "all"
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
				scores: easyScores,
				scoreListOpen: true,
				showing: "easy"
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
				scores: interScores,
				scoreListOpen: true,
				showing: "intermediate"
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
				scores: hardScores,
				scoreListOpen: true,
				showing: "hard"
			})
		}
	}

	 // this method will allow us to filter the scores (all, easy, intermediate, hard)
	filterScores = (e) => {

		this.getScores(e.target.value)
	}

	// search method
	search = (name) => {

		// we will replace this with the fetch calls to the backend
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

		// this is will allow us to look for matches
		let re = new RegExp(name, 'i')
		

		const filteredScore = []

		// loop through each score object
		for(let i = 0; i < scores.length; i++) {
			// console.log(scores[i].owner.username);
			if(scores[i].owner.username.match(re) !== null) {
				console.log(scores[i]);
				filteredScore.push(scores[i])

			} else {
				console.log("We didn't find what you're searching for");
			}

		}

		this.setState({scores: filteredScore})


		// find a match
		// push matches to a new array
		// set scores on state with the new array
		// if no matches is found, inform the user


	}


	render() {

		return(
			
			<div className="highscore-container">
				
				<h2>HighScore Container</h2>

				<div>
					<button>Home</button>
					<button>About</button>
					
				</div>

				<SearchForm 

					search={this.search}/>

				<Select
		        	labelId="simple-select-label"
		          	id="simple-select"
		          	value={this.state.showing}
		          	onChange={this.filterScores}>

					<MenuItem value="all">All</MenuItem>
					<MenuItem value="easy">Easy</MenuItem>
					<MenuItem value="intermediate">Intermediate</MenuItem>
					<MenuItem value="hard">Hard</MenuItem>
				</Select>

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
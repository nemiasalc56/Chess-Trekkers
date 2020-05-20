import React from 'react'




function Scorelist(props) {

	const scores = props.scores.map((score) => {
		return(
			<p key={score.id}>
				{score.high_score}
			</p>
			)
	})

	const scoreNames = props.scores.map((score) => {
		return(
			<p key={score.id}>
				{score.owner.username}
			</p>
			)
	})

	const scoreRanks = props.scores.map((score) => {
		return(
			<p key={score.id}>
				{score.rank}
			</p>
			)
	})


	return(
		<div className="score-list">
			

			<div className="names">
				<h5>Name</h5>
				{scoreNames}
			</div>

			<div className="scores">
				<h5>Score</h5>
				{scores}
			</div>

			<div className="ranks">
				<h5>Rank</h5>
				{scoreRanks}
			</div>
		</div>
		)
}




export default Scorelist
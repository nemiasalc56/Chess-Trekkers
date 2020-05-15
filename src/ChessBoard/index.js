import React, { Component } from 'react';
import './index.css';


export default class ChessBoard extends Component {
	constructor(props){
		super(props)

		this.state = { 
			movement: [],
			board: [
					['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
					['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
					[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
					[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
					[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
					[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
					['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
					['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
				]

		}
	}

	onClick = (e) => {
		console.log(e.target, 'here is the target')
	}

	render(){
		const gameBoard = []
		// for(let i = 0; i <= 64; i++){
		// 	gameBoard.push(i)
		// }

		for (let i = 0 ; i <= 7; i++){
			for (let j = 0 ; j <= 7; j++){
				gameBoard.push(`${i}${j}`)
			}
		}

		const boardInner = []
		for(let i = 0; i <= 7; i++){
			boardInner.push(i)
		}

		const finalBoard = gameBoard.map(id => {
			const element = this.state.board[id[0]][id[1]]
			return (
        <div onClick={this.onClick} key={id} className="box" id={"sq#" + id}>
          {element === " " ? " " : element === "X" ? <div className="red-circle"></div> : <div className="blue-circle"></div>}
        </div>
      );
		})

	  	return (
	    	<div className="board">
				<div className="top">
			    	<div className="board-inner">
				    	{boardInner.map(id => {
				    		return <div 
				    		key={id}
				    		id={'inner-sq#'+id}
				    		className='box-inner'>{(id+10).toString(36).toUpperCase()}</div>
				    	})}
			    	</div>
			  	</div>

				{finalBoard}

				<div className="bottom">
			    	<div className="board-inner">
				    	{boardInner.map(id => {
				    		return <div 
				    		key={id}
				    		id={'inner-sq#'+id}
				    		className='box-inner'>{(id+10).toString(36).toUpperCase()}</div>
				    	})}
			    	</div>
			  	</div>
			</div>
	  )
	}
}
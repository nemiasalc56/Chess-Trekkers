import React, { Component } from 'react';
import './index.css';


export default class ChessBoard extends Component {
	constructor(props){
		super(props)

		this.state = { 
			movement: [],
			originY: null,
			originX: null,
			board:[
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
	updateBoard = (board, originY, originX, destY, destX) => {
		board[destY][destX] = board[originY][originX]
		board[originY][originX] = " "
		return board
	}	
	
	onClick = (e) => {
		console.log(e.target.parentNode.id, 'here is the target.parentNode.id')
		console.log(e.target.id, 'here is the target.id')
		
		const y = e.target.id[3] || e.target.parentNode.id[3]
		const x = e.target.id[4] || e.target.parentNode.id[4]
		if (!this.state.originY){
			// const y = e.target.parentNode.id[3]
			// const x = e.target.parentNode.id[4]
			this.setState({
				originY: y,
				originX: x
			})
		}
		else{
			const newBoard = this.updateBoard(this.state.board, this.state.originY, this.state.originX, y, x)
			this.setState({
				originY: null,
				originX: null,
				clicks: 0,
				board: newBoard,
				movement: [...this.state.movement, newBoard]
      		})
		}
	}
	
	render(){
		console.table(this.state.board)
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
					{
						element === " " ? " " 
						: 
						element === "X" ? <div className="red-circle"/>
						: 
						<div className="blue-circle"/>
					}
				</div>
      		)
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
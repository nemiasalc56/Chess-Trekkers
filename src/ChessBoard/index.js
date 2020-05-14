import React, { Component } from 'react';
import './index.css';


export default class ChessBoard extends Component {
	constructor(props){
		super(props)

		this.state = { 
			movement: []

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

			  	{gameBoard.map(id => {
			  		return <div onClick={this.onClick} key={id} 
			  		className='box' 
			  		id={'sq#'+id}></div>
			  	})}

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
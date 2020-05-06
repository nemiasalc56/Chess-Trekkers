import React, { Component } from 'react';
import './index.css';

export default class ChessBoard extends Component {
	constructor(props){
		super(props)

		this.state = { 
			movement: null 

		}
	}

	render(){

	  return (
	    	<div className="board">
				<div className="top">
			    	<div className="board-inner">
			      		<div className="box-inner">A</div>
			      		<div className="box-inner">B</div>
			      		<div className="box-inner">C</div>
			      		<div className="box-inner">D</div>
			      		<div className="box-inner">E</div>
			      		<div className="box-inner">F</div>
			      		<div className="box-inner">G</div>
			      		<div className="box-inner">H</div>
			    	</div>
			  	</div>
			  	<div className="box"><div className="dumb-box"></div></div>
			  	<div className="box"></div>
			  	<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>

				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>

				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>

				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>

				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>

				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>

				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>

				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>

				<div className="bottom">
			    	<div className="board-inner">
			      		<div className="box-inner">A</div>
			      		<div className="box-inner">B</div>
			      		<div className="box-inner">C</div>
			      		<div className="box-inner">D</div>
			      		<div className="box-inner">E</div>
			      		<div className="box-inner">F</div>
			      		<div className="box-inner">G</div>
			      		<div className="box-inner">H</div>
			    	</div>
			  	</div>
			</div>
	  )

	}
}


	
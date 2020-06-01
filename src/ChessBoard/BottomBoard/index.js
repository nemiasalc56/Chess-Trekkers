import React, { Component } from 'react'

export default class BottomBoard extends Component{
	constructor(props){
		super(props)
		
		this.state = {
			board: [
					[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
					[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
					['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
					['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
				]
		}


	}
	
	componentDidMount(){
		this.state.board.forEach(item => {
				this.props.addBottom(item)
			})
		}

	render(){

		return(
			<React.Fragment>
			</React.Fragment>
		)
	}
}
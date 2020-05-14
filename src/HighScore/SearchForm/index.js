import React, { Component } from 'react'



class SearchForm extends Component{
	constructor(props) {
		super(props)

		this.state = {
			search: ''
		}
	}


	// this method will allow us to update the state when the user is typing
	handleChange = (e) => {

		this.setState({
			search: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		if(this.state.search !== '') {
			
			this.props.search(this.state.search)
		}
	}


	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text"
						value={this.state.search}
						name="search"
						placeholder="Search"
						onChange={this.handleChange}
						name="search"/>

					<button type="submit">Search</button>
				</form>
			</div>
			)
	}
}




export default SearchForm
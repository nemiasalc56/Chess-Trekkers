import React, { Component } from 'react'



class SearchForm extends Component{
	constructor(props) {
		super(props)

		this.state = {
			search: ''
		}
	}


	// search method
	handleChange = (e) => {
		console.log("user is trying to search", e.target.value);

		this.setState({
			search: e.target.value
		})
	}

	


	render() {
		return(
			<div>
				<form>
					<input 
						type="text"
						value={this.state.search}
						name="search"
						placeholder="Search"
						onChange={this.handleChange}
						name="search"/>

					<button>Search</button>
				</form>
			</div>
			)
	}
}




export default SearchForm
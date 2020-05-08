import React, { Component } from 'react';
import './App.css';
import ChessBoard from './ChessBoard';
import HomeComponent from './HomeComponent'


export default class App extends Component {
  constructor(){
  	super()
  	this.state = {
  		homeOpen: true,
  		startMatch: false,
  		highscoreOpen: false,
  		aboutUsOpen: false
  	}
  }
  	openChoices = (e) => {
  		// this function will be passed down as props to the home 
  		// component, and then lift state up to change based on the input 
  		console.log('here is the event', e.currentTarget.name)
  		
  		if(e.currentTarget.name == 'startGame') {
  			this.setState({
  				homeOpen: false,
  				startMatch: true 
  			})
  		}

  		if(e.currentTarget.name == 'highscores') {
  			this.setState({
  				homeOpen: false,
  				highscoreOpen: true 
  			})
  		}

  		if(e.currentTarget.name == 'aboutUs') {
  			this.setState({
  				homeOpen: false,
  				aboutUsOpen: true 
  			})
  		}


  	}

  	highscores = () => {
  		this.setState({
  			homeOpen: false,
  			highscores: true
  		})
  	}

  	aboutUs = () => {
  		this.setState({
  			homeOpen: false,
  			aboutUs: true
  		})
  	}

  render(){
  	return (
    <div className="App">
    	{this.state.homeOpen ? <HomeComponent
    		openChoices={this.openChoices}
    		/> : null}
    	{this.state.startMatch ? <ChessBoard/> : null}
    	{this.state.highscoreOpen ? <ChessBoard/> : null}
    	{this.state.aboutUsOpen ? <ChessBoard/> : null}
    </div>
  )
  } 
}



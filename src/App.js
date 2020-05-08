import React, { Component } from 'react';
import './App.css';
// import ChessBoard from './ChessBoard';
import HomeComponent from './HomeComponent'


export default class App extends Component {
  constructor(){
  	super()
  }
  render(){
  	return (
    <div className="App">
    	<HomeComponent/>
    </div>
  )
  } 
}



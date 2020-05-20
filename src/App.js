import React from 'react';
import './App.css';
import ChessBoard from './ChessBoard';
import HighScore from './HighScore'

function App() {
  return (
    <div className="App">
    	Chess Trekkers
    	<React.StrictMode>
    		<ChessBoard />
    		
    	</React.StrictMode>
    	<HighScore />
    </div>
  )
}

export default App;

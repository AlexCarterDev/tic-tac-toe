import React, { Component } from 'react';
import './scss/main.scss'
import AppBar from './components/AppBar'
import Board from './components/Board'
import RoundButton from './components/RoundButton'
import NewGameDialog from './components/NewGameDialog';
import ListGames from './pages/ListGames'
import Game from './pages/Game'

const styleForExamples = {
	padding: '20vh 20vw',
	height: '60vh',
	backgroundColor: '#eee',
}

function boardExample() {
	var whiteCell = <div style={{backgroundColor: '#fff'}}></div>
	var blackCell = <div style={{backgroundColor: '#000'}}></div>

	var strCompPairs = {};
	strCompPairs.w = whiteCell;
	strCompPairs.b = blackCell;

	var map = [
		['b','w','b','w'],
		['w','w','w','b'],
		['w','b','w','b'],
		['w','b','w','w'],
	]
	return (
		<div style={styleForExamples}>
			<Board
				strCompPairs={strCompPairs}
				strField={map}
				size={3}
			/>
		</div>
	);
}

class App extends Component {
	render() {
		return (
			<Game 
				owner="Alex Carter"
				opponent="John Doe"
				gameState="playing"
			/>
		)
	}
}

export default App;
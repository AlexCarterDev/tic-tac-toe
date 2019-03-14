import React, { Component } from 'react';
import './scss/main.scss'
import AppBar from './components/AppBar'
import Board from './components/Board'
import RoundButton from './components/RoundButton'

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
		['b','w','b'],
		['w','w','w'],
		['w','b','w'],
	]
	return (
		<div style={styleForExamples}>
			<Board style={{height: 500, width: 500}}
				strCompPairs={strCompPairs}
				strField={map}
				size={3}
			/>
		</div>
	);
}

function roundButtonExample() {
	return (
		<div style={styleForExamples}>
			<RoundButton>4</RoundButton>
		</div>
	)
}

class App extends Component {


	render() {
		return roundButtonExample();
	}
}

export default App;
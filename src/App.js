import React, { Component } from 'react';
import './scss/main.scss'

import ListGames from './pages/ListGames'
import Game from './pages/Game'

class App extends Component {
	render() {
		return (
			<ListGames />
			// <Game 
			// 	owner="Alex Carter"
			// 	opponent="John Doe"
			// 	gameState="playing"
			// />
		)
	}
}

export default App;
import React, { Component } from 'react';
import './scss/main.scss'
import AppBar from './components/AppBar'

class App extends Component {
	render() {
		return (
			<AppBar title='Tic Tac Toe' />
		);
	}
}

export default App;
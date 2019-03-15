import React, { Component } from 'react'
import AppBar from '../components/AppBar'
import GamePreview from '../components/GamePreview';
import RoundButton from '../components/RoundButton';

export default class ListGames extends Component {
	render() {
		return (
			<div id="list-games">
				<AppBar>Tic Tac Toe</AppBar>
				<div className="content-container">

					<div className="user-name-container">
						<input className="user-name-input" type="text"
							placeholder="Введите свое имя"/>
					</div>

					<div className="game-preview-list">
						<div className="square">
						</div>
						<div className="square">
						</div>
						<div className="square">
						</div>
						<div className="square">
						</div>
					</div>

					<RoundButton className="create-new-game">+</RoundButton>
				</div>
			</div>
		)
	}
}

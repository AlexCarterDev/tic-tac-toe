import React, { Component } from 'react'
import AppBar from '../components/AppBar'
import GamePreview from '../components/GamePreview';
import RoundButton from '../components/RoundButton';
import api from '../ServerApi';
import NewGameDialog from '../components/NewGameDialog';



export default class ListGames extends Component {
	state = {
		games: [],
		showDialog: false,
	}

	updateGameList = (games) => {
		this.setState({games})
	}

	componentDidMount() {
		api.getGamesList(this.updateGameList);
	}

	showOrHideDialog = () => {
		this.setState({
			showDialog: !this.state.showDialog
		})
	}

	render() {


		var previewsArr = this.state.games.map((descr) => (
			<div className="square">
				<GamePreview
					owner={descr.owner}
					opponent={descr.opponent}
					winner={descr.gameResult}
					gameState={descr.state}
					duration={descr.gameDuration}
				/> 
			</div>
		))


		return (
			<div id="list-games">
				<AppBar>Tic Tac Toe</AppBar>
				<div className="content-container">

					<div className="user-name-container">
						<input className="user-name-input" type="text"
							placeholder="Введите свое имя"/>
					</div>

					<div className="game-preview-list">
						{previewsArr}
					</div>

					<RoundButton 
						className="create-new-game"
						onClick={this.showOrHideDialog}>
						+
					</RoundButton>

					{ this.state.showDialog && 
						<>
							<div className="overlay" onClick={this.showOrHideDialog} />
							<NewGameDialog 
								onClickBackButton={this.showOrHideDialog}
							/>
						</>
					}
				</div>
			</div>
		)
	}
}

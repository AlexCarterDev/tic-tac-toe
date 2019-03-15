import React, { Component } from 'react'
import Duration from './Duration'

const GAME_STATE = {
	READY: 'ready',
	PLAYING: 'playing',
	DONE: 'done'
}

function Player(props) {
	var winClass = props.isWin ? 'win' : '';

	return (
		<div className={"player " + winClass + " " + props.className}>
			<p className="player-name">{props.children}</p>
			<div className="check-mark">
				{props.isWin ? "✓" : ""}
			</div>
		</div>
	)
	
}

export default class GamePreview extends Component {
	render() {
		var { gameState, owner, opponent, duration, winner } = this.props;
		var className;

		var ownerIsWin = false;
		var opponentIsWin = false;

		switch (gameState) {
			case GAME_STATE.READY: {
				className = 'game-preview-ready'
				break
			}
			case GAME_STATE.PLAYING: {
				className = 'game-preview-playing'
				break
			}
			case GAME_STATE.DONE:{
				className = 'game-preview-done'
				ownerIsWin = winner === 'owner';
				opponentIsWin = winner === 'opponent';
				break
			}
			default: {
				throw gameState + ' is not a valid game state';
			}
		}

		

		return (
			<div className={"game-preview " + className}>
				<Player isWin={ownerIsWin} className="owner">
					{owner}
				</Player>
				{gameState !== GAME_STATE.READY ? (
					<>
						<div className="separator"></div>
						<Player isWin={opponentIsWin} className="opponent">
							{opponent}
						</Player>
					</>
				) : null}
				<Duration className="game-duration" ms={duration}/>
			</div>
		)
	}
}

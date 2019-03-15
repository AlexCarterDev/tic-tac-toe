import React, { Component } from 'react'
import AppBar from '../components/AppBar'
import GamePreview from '../components/GamePreview';

export default class ListGames extends Component {


	render() {
		return (
			<div id="list-games">
				<AppBar>Tic Tac Toe</AppBar>
				<div className="outer-container">
					<div className="content-container">
						<div className="user-name-container">
							<input className="user-name-input" type="text"
								placeholder="Введите свое имя" value="Chuck Norris"/>
						</div>
						<div className="game-preview-list">
							<div className="square">
								<GamePreview 
									gameState='done'
									owner='Criss Parrotisse'
									opponent='Criss Parrotisse'
									duration={12345}
									winner='opponent'
								/>
							</div>
							<div className="square">
								<GamePreview 
									gameState='ready'
									owner='Criss'
									duration={12345}
								/>
							</div>
							<div className="square">
								<GamePreview 
									gameState='playing'
									owner='Alex Carter'
									opponent='John Doe'
									duration={12345}
								/>
							</div>
							<div className="square">
								<GamePreview 
									gameState='playing'
									owner='Alex Carter'
									opponent='John Doe'
									duration={12345}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

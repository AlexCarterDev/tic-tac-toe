import React, { Component } from 'react'
import AppBar from '../components/AppBar';
import Board from '../components/Board';
import FlexibleSquares from '../components/FlexibleSquares';

function Cross(props) {
	return (
		<div className="cross">
			<div className="cross-line"></div>
			<div className="cross-line"></div>
		</div>
	)
}

function Circle(props) {
	return (
		<div className="circle"></div>
	)
}

function Player({name, current, iconPosition, icon}) {
	var isIconLeft = iconPosition === 'left';
	var isIconRight = iconPosition === 'right';
	var currentClass = current ? 'player-current' : '';

	return (
		<div className={"player " + currentClass}>
			{isIconLeft && icon}
			<p className="player-name ">
				{name}
			</p>
			{isIconRight && icon}
		</div>
	)
}

export default class Game extends Component {
	state = {
		
	}

	pairs = {
		"X": <Cross />,
		"O": <Circle />,
		"?": <div></div>
	}
	field = [
		['X', 'O', 'X'],
		['?', 'O', 'X'], 
		['O', 'X', '?'], 
	]

	render() {
		var { boardSize, owner, opponent} = this.props;
		return (
			<div className="game">
				<AppBar>Tic Tac Toe</AppBar>
				<div className="content-container">
					<div className="playing-players">
						<Player name={owner} current iconPosition='right' icon={<Cross />} />
						<Player name={opponent} iconPosition='left' icon={<Circle />}/>
					</div>
					<FlexibleSquares >
						<Board 
							size={boardSize}
							strCompPairs={this.pairs}
							strField={this.field}
						/>
					</FlexibleSquares>
				</div>
			</div>
		)
	}
}


import React, { Component } from 'react'
import AppBar from '../components/AppBar';
import Board from '../components/Board';
import FlexibleSquares from '../components/FlexibleSquares';

function Cross(props) {
	return (
		<svg className='cross'>
			<line x1="10%" y1="10%" x2="90%" y2="90%"/>
			<line x1="10%" y1="90%" x2="90%" y2="10%"/>
		</svg>
	)
}

function Circle(props) {
	return (
		<svg className='circle'>
			<circle cx="50%" cy="50%" r="42%"/>
		</svg>
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
		"?": <div/>
	}
	field = [
		['X', '?', 'X'],
		['?', 'O', 'X'],
		['O', 'O', 'X'],
	]

	render() {
		var { boardSize, owner, opponent} = this.props;
		return (
			<div className="game">
				<div className="content-container">
					<div className="playing-players">
						<Player name={owner} current iconPosition='right' icon={<Cross />} />
						<Player name={opponent} iconPosition='left' icon={<Circle />}/>
					</div>
					<FlexibleSquares >
						<Board 
							size={3}
							strCompPairs={this.pairs}
							strField={this.field}
						/>
					</FlexibleSquares>
				</div>
				<AppBar>Tic Tac Toe</AppBar>
			</div>
		)
	}
}

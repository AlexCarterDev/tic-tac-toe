import React, { Component } from 'react'
import RoundButton from './RoundButton';
import Button from './Button';

export default class NewGameDialog extends Component {
	state = {
		selectedBoardSize: 3,
		selectedCountBoards: 1,
	}

	boardSizes = [3,4,5]
	boardCounts = [1,2]


	selectCountHandler = (currentValue) => {
		this.setState({ selectedBoardSize: currentValue })
	}

	selectSizeHandler = (currentValue) => {
		this.setState({ selectedCountBoards: currentValue })
	}

	createSelector = (arr, selectedValue, clickHandler) => {
		var buttons = arr.map((currentValue) => {
			let className = selectedValue !== currentValue ? "unselected-button" : "";
			return (
				<RoundButton key={currentValue} className={className} onClick={() => clickHandler(currentValue)}>
					{currentValue}
				</RoundButton>
			)
		})

		return buttons;
	}

	render() {

		var sizeSelector = this.createSelector(this.boardSizes, this.state.selectedBoardSize, this.selectCountHandler)

		var countSelector = this.createSelector(this.boardCounts, this.state.selectedCountBoards, this.selectSizeHandler)

		return (
			<div className='new-game-dialog'>
				
				<div className="dialog-container">
					<p className="text">Размер поля</p>
					<div className="buttons-row">
						{sizeSelector}
					</div>
					<p className="text">Количество</p>
					<div className="buttons-row">
						{countSelector}
					</div>

					<Button className='button-back'>{"<"}</Button>
					<Button className='button-create-game'>Создать</Button>
				</div>
			</div>
		)
	}
}

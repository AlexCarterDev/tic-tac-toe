import React, { Component } from 'react'

export default class Board extends Component {
	render() {
		var { size, strCompPairs, strField} = this.props;

		var cells = [];
		var i;

		for (let colIndex = 0; colIndex < size; colIndex++) {
			for (let rowIndex = 0; rowIndex < size; rowIndex++) {
				if (colIndex < strField.length && rowIndex < strField[colIndex].length) {
					
				} else {

				}
			}
		}
		strField.forEach((row, rowIndex) => {
			row.forEach((str, colIndex) => {
				var style = {};
				if (colIndex !== 0) {
					style.borderLeftStyle = 'solid'
				}
				if (rowIndex != 0) {
					style.borderTopStyle = 'solid'
				}
				var component = <>{strCompPairs[str]}</>

				if (str in strCompPairs) {
					cells.push(<div style={style}>{strCompPairs[str]}</div>)
				} else {
					cells.push(<div />)
				}
			})
		});

		var styleColumnNum = {
			gridTemplateColumns: `repeat(${size}, 1fr)`
		}

		return (
			<div className="board" style={styleColumnNum}>
				{cells}
			</div>
		)
	}
}

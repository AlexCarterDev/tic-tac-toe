import React, { Component } from 'react'

export default class Board extends Component {
	render() {
		var { size, strCompPairs, strField} = this.props;

		var cells = [];
		strField.forEach(row => {
			row.forEach(str => {
				if (str in strCompPairs) {
					cells.push(strCompPairs[str])
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

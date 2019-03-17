import React, { Component } from 'react'

export default class Button extends Component {
	render() {
		var { className } = this.props;
		return (
			<div className={"button " + this.props.className} onClick={this.props.onClick}>
				{this.props.children}
			</div>
		)
	}
}

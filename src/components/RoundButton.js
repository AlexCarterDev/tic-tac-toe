import React, { Component } from 'react'

export default class RoundButton extends Component {
	render() {
		return (
			<a href={this.props.link} className="round-button">
				{this.props.children}
			</a>
		)
	}
}

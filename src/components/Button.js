import React, { Component } from 'react'

export default class Button extends Component {
	render() {
		return (
			<a href="/" className={"button " + this.props.className}>
				{this.props.children}
			</a>
		)
	}
}

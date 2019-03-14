import React, { Component } from 'react'

export default class AppBar extends Component {
	render() {
		return (
			<div id="app-bar">
				<div className="title-container">
					<h2 className="title">{this.props.title}</h2>
				</div>
			</div>
		)
	}
}

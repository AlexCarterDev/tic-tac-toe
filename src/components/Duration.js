import React, { Component } from 'react'

export default class Duration extends Component {
	render() {
		var { ms } = this.props;

		return (
			<div>
				<p className={"duration + " + this.props.className}>
					{ms}
				</p>
			</div>
		)
	}
}

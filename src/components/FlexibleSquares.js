import React, { Component } from 'react'

export default class FlexibleSquares extends Component {
	
	render() {
		var {children} = this.props;
		var wrappedChildren = React.Children.map(children, (child) => {
			return (
				<div className="square">
					{child}
				</div>
			)
		})

		return (
			<div className="flexible-squares">
				{wrappedChildren}
			</div>
		)
	}
}

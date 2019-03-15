import React, { Component } from 'react'

export default class Duration extends Component {

	convertMsToHMS(ms) {
		return {
			seconds: Math.floor((ms/1000)%60),
			minutes: Math.floor((ms/(1000*60))%60),
			hours: Math.floor((ms/(1000*60*60))%24),
		}
	}
	
	convertNumberTo2Digits(number) {
		return  ("0" + number).slice(-2);
	}

	render() {
		var { ms } = this.props;
		var time = this.convertMsToHMS(ms)
		var hh = this.convertNumberTo2Digits(time.hours);
		var mm = this.convertNumberTo2Digits(time.minutes);
		var ss = this.convertNumberTo2Digits(time.seconds);

		return (
			<div>
				<p className={"duration + " + this.props.className}>
					{hh + ":" + mm + ":" + ss}
				</p>
			</div>
		)
	}
}

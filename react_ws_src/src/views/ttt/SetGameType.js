import React, { Component} from 'react'
export default class SetGameType extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
//	------------------------	------------------------	------------------------
	render () {
		return (
			<div id='SetGameType' className='page-container'>
				<h1>Choose game type</h1>
				<button type='submit' onClick={this.selTypeLive.bind(this)} className='button long'><span>Live against another player <span className='fa fa-caret-right'></span></span></button>
				
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button type='submit' onClick={this.selTypeComp.bind(this)} className='button long'><span>Against a computer <span className='fa fa-caret-right'></span></span></button>
			</div>
		)
	}
//	------------------------	------------------------	------------------------
	selTypeLive (e) {
		this.props.onSetType('live')
	}
//	------------------------	------------------------	------------------------
	selTypeComp (e) {
		this.props.onSetType('comp')
	}
}

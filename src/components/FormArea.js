import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggle } from '../actions/parser.actions';
import { FormAreaView } from './screens';

class FormArea extends Component{

	constructor(){
		super();
		this.onToggleCheck = this.onToggleCheck.bind(this);
	}

	onToggleCheck(prop){
		this.props.dispatch(toggle(prop));
	}

	render(){
		const checks = [
			{
				name: 'maxSpeed',
				label: 'Velocidad máxima',
				selected: this.props.maxSpeed
			},
			{
				name: 'maxHeight',
				label: 'Altura máxima',
				selected: this.props.maxHeight
			},
			{
				name: 'startPos',
				label: 'Lugar de inicio',
				selected: this.props.startPos
			},
			{
				name: 'totalTime',
				label: 'Tiempo total',
				selected: this.props.totalTime
			},
			{
				name: 'totalDistance',
				label: 'Distancia total',
				selected: this.props.totalDistance
			},
			{
				name: 'path',
				label: 'Recorrido',
				selected: this.props.path
			}
		];

		return (
			<FormAreaView checks={checks} toggleCheck={this.onToggleCheck} /> 
		);
	}
}

const mapStateToProps = (state, action) => ({
	path: state.parser.props.path,
	totalDistance: state.parser.props.totalDistance,
	totalTime: state.parser.props.totalTime,
	startPos: state.parser.props.startPos,
	maxHeight: state.parser.props.maxHeight,
	maxSpeed: state.parser.props.maxSpeed
});

export default connect(mapStateToProps)(FormArea);



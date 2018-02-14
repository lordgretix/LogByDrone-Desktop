import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ButtonAreaView } from './screens';
import {startParsing} from '../actions/parser.actions';

class ButtonArea extends Component {
	constructor() {
		super();
		this.createFile = this.createFile.bind(this);

	}

	createFile(fileType = 'json'){
		this.props.dispatch(startParsing(fileType));
	}

	render() {
		return (
			<ButtonAreaView  createFile={this.createFile}/>
		);
	}
}

const mapStateToProps = (state, action) => ({
});

export default connect(mapStateToProps)(ButtonArea);

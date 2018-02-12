import React, { Component } from 'react';
import {connect } from 'react-redux';

import { FileAreaView } from './screens';
import { startParsing } from '../actions/parser.actions';

class FileArea extends Component{
    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
			this.props.dispatch(startParsing(e.target.files));
    }

    render(){
        return (
					<FileAreaView onChange={this.onChange} parsing={this.props.parsing}/>
        );
    }
}

const mapStateToProps = (state, action) => ({
	parsing: state.parser.parsing
}); 

export default connect(mapStateToProps)(FileArea);

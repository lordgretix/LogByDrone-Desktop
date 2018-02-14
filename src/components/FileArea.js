import React, { Component } from 'react';
import {connect } from 'react-redux';

import { FileAreaView } from './screens';
import { addFile } from '../actions/parser.actions';

class FileArea extends Component{
    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
			this.props.dispatch(addFile(e.target.files[0]));
    }

    render(){
			console.log(this.props.file);
        return (
					<FileAreaView onChange={this.onChange} parsing={this.props.parsing} file={this.props.file}/>
        );
    }
}

const mapStateToProps = (state, action) => ({
	parsing: state.parser.parsing,
	file: state.parser.file
}); 

export default connect(mapStateToProps)(FileArea);

import React, { Component } from 'react';

import FileArea from './FileArea';
import FormArea from './FormArea';
import './main.scss';

class AppContainer extends Component{
	render(){
		return (
			<div>
				<FileArea />
				<FormArea />
			</div>
		)
	}
}

export default AppContainer;

import React, { Component } from 'react';

import FileArea from './FileArea';
import FormArea from './FormArea';
import ButtonArea from './ButtonArea';
import './main.scss';
import Footer from './Footer';

class AppContainer extends Component{
	render(){
		return (
			<div>
				<FileArea />
				<FormArea />
				<ButtonArea />
				<Footer />
			</div>
		)
	}
}

export default AppContainer;

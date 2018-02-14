import React, { Component } from 'react';
import { FooterView } from './screens';
import { shell } from 'electron';


class Footer extends Component{
	constructor(){
		super();
		this.openExplorer = this.openExplorer.bind(this);
	}

	openExplorer(path){
		shell.openExternal(path);
	};

	render(){
		const social = [{
			icon: 'github-alt',
			href: 'https://github.com/jcarral/LogByDrone-Desktop'
		}];
		return <FooterView social={social} openExplorer={this.openExplorer}/>;
	}
}

export default Footer;

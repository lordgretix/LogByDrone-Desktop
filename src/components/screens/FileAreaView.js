import React from 'react';
import './FileAreaStyle.scss';

export const FileAreaView = ({onChange, parsing}) => {
	console.log('Parsing:', parsing);
	if(parsing) return (<Loading />);
	else return (<DropArea onChange={onChange}/>)
};

const Loading = () => (
	<div className="loader">
		<div className="inner one"></div>
		<div className="inner two"></div>
		<div className="inner three"></div>
	</div>
);

const DropArea = ({onChange}) => (
	<div className="file-container">
		<h2>Conversor de logs DroneByDrone</h2>
		<div className="file-drop-area">
			<span className="fake-btn">Selecciona fichero</span>
			<span className="file-msg js-set-number">&nbsp; o suéltalo aquí. </span>
			<input className="file-input" type="file" onChange={onChange} />
		</div>
	</div>
);

import DJIParser from 'dji-log-parser';
import {ipcRenderer } from 'electron';
import fs from 'fs';

const { dialog } = require('electron').remote;

export const fileParser = (files, props) => new Promise((resolve, reject) => {
	const file = files[0];
	let data = {};

	if (file.type !== 'text/plain') return reject('Not file type');

	const reader = new FileReader();
	reader.onload = function () {
		console.log('Loaded!');
		const parser = new DJIParser();

		if(props.path){
			data.locations = [];
			parser.on("OSD", function (obj) {
				data.locations.push({
					lat: obj.getLatitude(),
					lon: obj.getLongitude()
				});
			});
		}
	

		parser.on('DETAILS', function (obj) {
			if (props.maxHeight) data.maxHeight = obj.getMaxHeight();
			if (props.maxSpeed) {
				data.maxHSpeed = obj.getMaxHSpeed();
				data.maxVSpeed = obj.getMaxVSpeed();
			}
			if(props.startPos) {
				data.startPos = {};
				data.startPos.lat = obj.getLatitude();
				data.startPos.lon = obj.getLongitude();
			}
			if(props.totalTime) data.totalTime = obj.getTotalTime();
			if(props.totalDistance) data.totalDistance = obj.getTotalDistance();
		});
		parser.parse(this.result);
	};

	reader.onloadend = function () {
		const type = 'json';
		createFile(data, type);
		resolve();
	};

	reader.readAsArrayBuffer(file);
	}
);



const createFile = (data, type = 'json') => {

	dialog.showSaveDialog({ defaultPath: `~/log_${new Date().getTime()}.json`},(fileName) => {
		if (fileName === undefined) {
			console.log("You didn't save the file");
			return;
		}
		console.log(fileName);
		// fileName is a string that contains the path and filename created in the save file dialog.  
		fs.writeFile(fileName, data, (err) => {
			if (err) {
				return new Error('Error al escribir el fichero');
			}
			alert("Fichero almacenado correctamente");
		});
	}); 
};

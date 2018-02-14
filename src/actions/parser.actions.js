import { START_PARSING, SUCCESS_PARSING, ERROR_PARSING, TOGGLE_PROP, ADD_FILE } from '../types/parser.types';
import { fileParser } from '../utils/parser';

export const startParsing = (type) => (dispatch, getState) => {
	const { props, file } = getState().parser;
	try{
		dispatch({
			type: START_PARSING
		});

		fileParser(file, props, type)
			.then(res => {
				dispatch({
					type: SUCCESS_PARSING
				})
			})
			.catch(err => dispatch({
				type: ERROR_PARSING
				})
			);

	}catch(err){
		console.log(err);
		dispatch({
			type: ERROR_PARSING
		});
	}
};

export const toggle = (prop) => ({
	type: TOGGLE_PROP,
	payload: prop
});

export const addFile = (file) => ({
	type: ADD_FILE,
	payload: file
});

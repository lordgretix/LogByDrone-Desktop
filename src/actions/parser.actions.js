import { START_PARSING, SUCCESS_PARSING, ERROR_PARSING, TOGGLE_PROP } from '../types/parser.types';
import { fileParser } from '../utils/parser';

export const startParsing = (files) => (dispatch, getState) => {
	const { props } = getState().parser;
	try{
		dispatch({
			type: START_PARSING
		});

		fileParser(files, props)
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


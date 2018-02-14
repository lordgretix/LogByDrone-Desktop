import { SUCCESS_PARSING, ADD_FILE, ERROR_PARSING, START_PARSING, TOGGLE_PROP } from '../types/parser.types.js';

const initialState = {
	parsing: false,
	props: {
		maxSpeed: true,
		maxHeight: true,
		startPos: true,
		totalTime: true,
		totalDistance: true,
		path: false
	},
	error: false,
	file: null
};

export const parserReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_PROP:
			return toggleProp(state, action.payload);
		case START_PARSING:
			return {
				...state,
				parsing: true
			};
		case SUCCESS_PARSING:
			return {
				...state,
				parsing: false,
				error: false
			};
		case ERROR_PARSING:
			return {
				...state,
				parsing: false,
				error: true
			};
		case ADD_FILE:
			return {
				...state,
				file: action.payload
			};
		default:
			return state;
	}
};


const toggleProp = (state, prop) => {
	let toggled = {};
	toggled[prop] = !state.props[prop];
	
	const props = Object.assign({}, state.props, toggled);
	console.log(props);
	return {
		...state,
		props
	}
};

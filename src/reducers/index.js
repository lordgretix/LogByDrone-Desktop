import { combineReducers } from 'redux';
import { parserReducer } from './parser.reducer.js';

const reducers = combineReducers({
	parser: parserReducer,
});

export default reducers;

import {combineReducers} from 'redux';

import {placesReducers} from './placesReducers.js';

export default combineReducers({
    places: placesReducers
})
import { combineReducers } from 'redux';
import settings from './settings';
import media from './media';

const allReducers = combineReducers({ settings, media });

export default allReducers;

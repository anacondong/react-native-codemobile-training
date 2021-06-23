import { combineReducers } from "redux";
import homeReducer from './home.reducer'
import jsonFeedReducer from './jsonfeed.reducer'

export default combineReducers({homeReducer, jsonFeedReducer})
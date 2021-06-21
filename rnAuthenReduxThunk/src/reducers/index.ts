import {combineReducers} from 'redux'
import jsonfeedReducer from './jsonfeed.reducer'
import activityReducer from './activity.reducer'

export default combineReducers({
    jsonfeedReducer,
    activityReducer,
})
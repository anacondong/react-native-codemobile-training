import {combineReducers} from 'redux'
import jsonfeedReducer, { JsonfeedState } from './jsonfeed.reducer'
import activityReducer, { ActivityState } from './activity.reducer'

export default combineReducers({
    jsonfeedReducer,
    activityReducer,
})

export interface RootReduces {
    jsonfeedReducer: JsonfeedState;
    activityReducer: ActivityState;
}
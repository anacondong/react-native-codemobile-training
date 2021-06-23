import {combineReducers} from 'redux'
import jsonfeedReducer, { JsonfeedState } from './jsonfeed.reducer'
import activityReducer, { ActivityState } from './activity.reducer'
import authReducer, { AuthState } from './auth.reducer'

export default combineReducers({
    jsonfeedReducer,
    activityReducer,
    authReducer,
})

export interface RootReduces {
    jsonfeedReducer: JsonfeedState;
    activityReducer: ActivityState;
    authReducer: AuthState;
}
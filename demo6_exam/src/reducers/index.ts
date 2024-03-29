import { combineReducers } from 'redux'
import jsonfeedReducer, { JsonfeedState } from './jsonfeed.reducer'
import activityReducer, { ActivityState } from './activity.reducer'
import authReducer, { AuthState } from './auth.reducer'
import registerReducer, { RegisterState } from './register.reducer'
import codeScanReducer, { CodeScanState } from './codescan.reducer'

export default combineReducers({
    jsonfeedReducer,
    activityReducer,
    authReducer,
    registerReducer,
    codeScanReducer,

})

export interface RootReduces {
    jsonfeedReducer: JsonfeedState;
    activityReducer: ActivityState;
    authReducer: AuthState;
    registerReducer: RegisterState;
    codeScanReducer: CodeScanState
}
import { combineReducers } from "redux";
import homeReducer from "./home.reducer"
import footerReducer from "./footer.reducer"

export default combineReducers({homeReducer, footerReducer})
import { JSONFEED_FETCHING_DATA, JSONFEED_FETCHING_SUCCESS, JSONFEED_FETCHING_FAILED } from "../constants";
import axios from "axios";
import {
  AsyncStorage,
} from "react-native";

export const setStateToFetching = () => ({
  type: JSONFEED_FETCHING_DATA,  
})

export const setStateToSuccess = (payload) => ({
  type: JSONFEED_FETCHING_SUCCESS,
  payload: payload
})

export const setStateToFailed = () => ({
  type: JSONFEED_FETCHING_FAILED,
})


export const feedData = () =>{
  return async dispatch =>{

    // this.setState({ isFetching: true });
    dispatch(setStateToFetching())
    let url = "http://codemobiles.com/adhoc/youtubes/index_new.php";
    let regUsername = await AsyncStorage.getItem("username");
    let regPassword = await AsyncStorage.getItem("password");

    let params = `username=${regUsername}&password=${regPassword}&type=foods`;
    axios
      .post(url, params, {
        headers: { "content-type": "application/x-www-form-urlencoded" }
      })
      .then(response => {
        // alert(JSON.stringify(response.data))
        // this.setState({ youtubes: response.data.youtubes, isFetching: false });
        dispatch(setStateToSuccess(response.data.youtubes))
      }).catch(err=>[
        dispatch(setStateToFailed())
      ]);

  }
}
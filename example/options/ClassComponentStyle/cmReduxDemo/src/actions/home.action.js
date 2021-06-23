import { HOME_FETCHING, HOME_SUCCESS, HOME_FAILED, HOME_RESET } from "../constants";

// Information that will be sent reducer
export const setStateToFetching = () => ({
    type: HOME_FETCHING,
})

export const setStateToSuccess = (payload) => ({
    type: HOME_SUCCESS,
    payload
})

export const setStateToFailed = () => ({
    type: HOME_FAILED    
})

export const setStateToReset = () => ({
    type: HOME_RESET,
})
// End

export const reset = ()=>{
    return dispatch=>{
        dispatch(setStateToReset())
    }
}

export const feed = ()=>{

    return dispatch=>{
        dispatch(setStateToFetching())

        setTimeout(()=>{
            dispatch(setStateToSuccess(["Android", "iOS", "Flutter","ReactNative"]))
        },1000)
    }
    
}



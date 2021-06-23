import { FOOTER_UPDATE_COUNT } from "../constants";

export const setStateToUpdateCount = () => ({
    type: FOOTER_UPDATE_COUNT,
})


export const updateCount = ()=>{
    return dispatch=>{
        dispatch(setStateToUpdateCount())
    }
}
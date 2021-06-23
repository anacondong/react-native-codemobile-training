import { FOOTER_UPDATE_COUNT } from "../constants";

const initialState = {
    count:0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FOOTER_UPDATE_COUNT:
        return { ...state, count:state.count + 1 }

    default:
        return state
    }
}

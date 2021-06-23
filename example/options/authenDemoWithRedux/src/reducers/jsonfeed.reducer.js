import { JSONFEED_FETCHING_DATA, JSONFEED_FETCHING_SUCCESS, JSONFEED_FETCHING_FAILED } from "../constants";

const initialState = {
  isFetching: false,
  youtubes: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case JSONFEED_FETCHING_DATA:
      return { ...state, youtubes: [], isFetching: true };
    case JSONFEED_FETCHING_SUCCESS:
      return { ...state, youtubes: payload, isFetching: false };
    case JSONFEED_FETCHING_FAILED:
      return { ...state, youtubes: [], isFetching: false };

    default:
      return state;
  }
};

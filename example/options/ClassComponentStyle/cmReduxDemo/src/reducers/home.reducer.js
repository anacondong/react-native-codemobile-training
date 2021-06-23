import {HOME_FETCHING, HOME_FAILED, HOME_SUCCESS, HOME_RESET} from '../constants';

const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case HOME_FETCHING:
      return {...state, isFetching: true, isError: false, result: null};
    case HOME_FAILED:
      return {...state, isFetching: false, isError: true, result: null};
    case HOME_SUCCESS:
      return {...state, isFetching: false, isError: false, result: payload};
    case HOME_RESET:
      return {...state, isFetching: false, isError: false, result: null};

    default:
      return state;
  }
};

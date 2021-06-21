import {ACTIVITY_ADD, ACTIVITY_CLEAR} from '../Constants';

const initialState = {
  data: [],
};

export default (state = initialState, action:any) => {
  switch (action.type) {
    case ACTIVITY_ADD:
      return {...state, data: [...state.data, action.payload]};
    case ACTIVITY_CLEAR:
      return {...state, data: []};

    default:
      return state;
  }
};

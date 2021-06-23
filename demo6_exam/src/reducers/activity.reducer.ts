import { RootReduces } from '.';
import {ACTIVITY_ADD, ACTIVITY_CLEAR} from '../constants/Constants';

export interface ActivityState {
  data: any;
}

const initialState: ActivityState = {
  data: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIVITY_ADD:
      return {...state, data: [...state.data, action.payload]};
    case ACTIVITY_CLEAR:
      return {...state, data: []};

    default:
      return state;
  }
};

export const ActivitySelector = (state: RootReduces) => state.activityReducer;

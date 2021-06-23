import { RootReduces } from '.';
import {AUTH_ADD, AUTH_CLEAR} from '../constants/Constants';

export interface AuthState {
  user: {
      username:string,
      password:string,
      email:string,
      role:string,
  };
}

const initialState: AuthState = {
    user: {
        username:'',
        password:'',
        email:'',
        role:'',
    },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_ADD:
      return {...state, user: action.payload};
    case AUTH_CLEAR:
      return {...state, user: {}};

    default:
      return state;
  }
};

export const AuthSelector = (state: RootReduces) => state.authReducer;

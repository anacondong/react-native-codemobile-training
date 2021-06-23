import { RootReduces } from '.';
import {
  AUTH_REQUEST,
  AUTH_CLEAR,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from '../constants/Constants';

export interface AuthState {
  user: {
    username: string;
    password: string;
    email: string;
    role: string;
  };
  error: string;
}

const initialState: AuthState = {
  user: {
    username: '',
    password: '',
    email: '',
    role: '',
  },
  error: '',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, user: null };
    case AUTH_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case AUTH_CLEAR:
      return { ...state, user: null, error: null };
    case AUTH_FAILED:
      return { ...state, user: null, error: 'Login Failed !!' };

    default:
      return state;
  }
};

export const AuthSelector = (state: RootReduces) => state.authReducer;

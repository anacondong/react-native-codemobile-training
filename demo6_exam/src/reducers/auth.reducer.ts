import { RootReduces } from '.';
import {
  AUTH_REQUEST,
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from '../constants/Constants';

export interface AuthState {
  user: {
    username: string;
    password: string;
    email: string;
    role: string;
  };
  isAuth: boolean,
  error: string;
}

const initialState: AuthState = {
  user: {
    username: '',
    password: '',
    email: '',
    role: '',
  },
  isAuth: false,
  error: '',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, user: null };
    case AUTH_SUCCESS:
      return { ...state, user: action.payload, error: null, isAuth: true };
    case AUTH_FAILED:
      return { ...state, user: null, error: 'Login Failed !!', isAuth: false };
    case AUTH_LOGOUT:
      return { ...state, user: null, error: null, isAuth: false };

    default:
      return state;
  }
};

export const AuthSelector = (state: RootReduces) => state.authReducer;

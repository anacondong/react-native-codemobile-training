import { RootReduces } from '.';
import {
    REGISTER_REQUEST,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
} from '../constants/Constants';

export interface RegisterState {
    user: {
        username: string;
        password: string;
    };
    isRegister: boolean,
    error: string;
}

const initialState: RegisterState = {
    user: {
        username: '',
        password: '',
    },
    isRegister: false,
    error: '',
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, user: null };
        case REGISTER_SUCCESS:
            return { ...state, user: action.payload, error: null, isRegister: true };
        case REGISTER_FAILED:
            return { ...state, user: null, error: 'Login Failed !!', isRegister: false };

        default:
            return state;
    }
};

export const RegisterSelector = (state: RootReduces) => state.registerReducer;

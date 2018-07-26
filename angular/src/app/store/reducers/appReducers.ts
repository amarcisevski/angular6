import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/appActions';

export interface IAppReducerState {
    logout: boolean,
    greetMessage: string;
}

const initialState: IAppReducerState = {
    greetMessage: 'Hello guest!',
    logout: false
};

export function reducer(state = initialState, action): IAppReducerState {
    switch(action.type) {
        case ACTION_LOGOUT:
            return{
                ...state,
                logout: false
            }
        case ACTION_LOGIN:
            return{
              ...state,
              logout: true
            }
    }
}

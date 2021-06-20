import { LOG_IN } from "../../constants/ActionTypes";

const initialState = {
    isChecked: false
}

export default function AuthReducer(state = initialState, action){
    switch(action.type) {
        case LOG_IN:
            return { ...state, isChecked: action.isChecked };
        case 'LOGOUT':
            return { ...state, isChecked: action.isChecked };
        default:
            return { ...state}
    }
}
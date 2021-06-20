import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer';
const rootReducer = combineReducers({
  Authentication: combineReducers({AuthReducer})
})


const reducers = (state, action) => {
    if (action.type === 'LOGOUT_USER' || action.type === 'REMOVE_REDUCER') {
      state = undefined;
    }
    return rootReducer(state, action);
};

export default reducers;


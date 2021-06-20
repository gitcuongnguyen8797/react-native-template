import { LOGIN_FORM, LOGIN_SOCIAL, LOG_IN } from "../../constants/ActionTypes"
export const Login = (data) => ({type: LOG_IN, data})
export const LogOut = () => ({type: 'LOGOUT', isChecked: false})
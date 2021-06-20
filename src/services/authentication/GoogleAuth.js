import { GoogleSignin } from "@react-native-google-signin/google-signin";
import axios from "axios"
import { LOGIN_SOCIAL } from "../../constants/ActionTypes";
import { ApiConfig } from "../../constants/ApiConfig"
import GoogleConfig from "../../constants/GoogleConfig";
import { Login, LoginSocial } from "../../redux/actions/AuthActions";
import { storeDispatch } from "../../redux/store";

export const login = async () => {
  GoogleSignin.configure(GoogleConfig)
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken,user, serverAuthCode} = await GoogleSignin.signIn();
    storeDispatch(Login({
      loginType: LOGIN_SOCIAL,
      data: {idToken,user, serverAuthCode}
    }))
    // axios.get(`http://dreamlife.com/api/auth/verify-token?code=${serverAuthCode}`).then(({data}) =>  storeDispatch(LoginSocial(data)))
    
  } catch (error) {
        console.log(`Login with google errors`)
  }
}
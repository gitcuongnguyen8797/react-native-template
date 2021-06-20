import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import GoogleAuthButton from '../components/Authentications/GoogleAuthButton'
import FaceBookButton from '../components/Authentications/FaceBookButton'
import Button from '../components//Button/index'
import { connect } from 'react-redux'
import { storeDispatch } from '../redux/store'
import { LoginSocial, LogOut } from '../redux/actions/AuthActions'

const onLogin = () => {
    storeDispatch(LoginSocial())
}
const onLogOut = () => {
    storeDispatch(LogOut())
}
const LoginPage = ({isChecked}) => {
    console.log(isChecked)
    return (
        
        <View style={styles.container}>
            <ImageBackground 
                source={{uri:'https://cdn.pixabay.com/photo/2019/09/27/09/39/melons-4507974__480.jpg'}} 
                style={styles.backgroundImage}
            ></ImageBackground>
            <View style={styles.contentBody}>
                <Text style={styles.title}>Đăng nhập</Text>

                <View style={styles.formBody}>
                    <Input 
                    placeholder="Email" 
                    leftIcon={{ 
                        type:'font-awesome',
                        name:"envelope"
                    }}/>

                    <Input 
                    placeholder="Password"
                    secureTextEntry={true} 
                    leftIcon={{ 
                            type:'font-awesome',
                            name:"lock"
                    }}/>
                </View>
                <View style={styles.actionButton}>
                    <Button
                    btnName={isChecked ? 'LogOut' : 'Login'}
                    color="primary"
                    onPress={onLogOut}
                    />
                </View>

                <View style={styles.loginSocial}>
                    <GoogleAuthButton style={styles.loginSocialButton} />
                    <FaceBookButton onPress={onLogin}                        
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100%',
        minWidth: '100%'
    },
    contentBody: {
        flex:1,
        textAlign: 'center',
        margin: 100,
        width: '80%',
        backgroundColor: '#FFFF',
        borderRadius: 20,
        elevation: 55,
        position: 'absolute'
    },
    formBody: {
        margin: '10%',
       
    },
    loginSocial: {
        margin: '10%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    loginSocialButton: {

    },
    actionButton: {
      paddingLeft:'10%',
      paddingRight: '10%'
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center',
        paddingTop: '10%'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        top:0,
        left:0,
        resizeMode:'center',
        position:'absolute'
    },
})

const mapStateToProps = ({Authentication}) => {
    const {AuthReducer} = Authentication
    return {
        ...AuthReducer
    }
}
export default connect(mapStateToProps,{})(LoginPage)
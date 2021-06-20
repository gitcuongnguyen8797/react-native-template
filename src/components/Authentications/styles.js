import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        minWidth: 50,
        maxHeight: 50,
        maxWidth: 50,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        display:'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 50,
        
        elevation: 20,
    },
    iconImage: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%'
    }
})

export default styles
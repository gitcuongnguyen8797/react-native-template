import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import * as GoogleAuthServices from '../../services/authentication/GoogleAuth'
import styles from './styles'
export default function GoogleAuthButton() {
    return (
        <TouchableOpacity  style={styles.container} onPress={GoogleAuthServices.login}>
            <Image  style={styles.iconImage}
                    source={{uri: 'https://lh3.googleusercontent.com/proxy/ll4wr7AK4okHGSChaeXPrlAjIO4S2_dWskSkRnIQLSldcIxXNL-T6nXJN3ZtQ4i8iZyAYbHWjdD9FIvgiZ2VPY6wSo6AW8dLWVLOUmvlCsw8kg1-RANdpCl-74Qjk1U'}}  
            />
        </TouchableOpacity>
    )
} 

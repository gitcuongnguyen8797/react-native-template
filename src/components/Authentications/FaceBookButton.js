import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import styles from './styles'

export default function FaceBookButton(props) {
    return (
        <TouchableOpacity  style={styles.container} {...props} >
            <Image  style={styles.iconImage}
                    source={{uri: 'https://www.pngkey.com/png/full/509-5094426_facebook-twitter-instagram-pinterest-facebook-logo-in-circle.png'}}  
            />
        </TouchableOpacity>
    )
} 


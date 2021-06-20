import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles';
import BUTTON_COLORS from './color';

const propTypes = {
    btnName: PropTypes.string.isRequired,
}
Button.prototype = propTypes
export default function Button(props) {
    const {btnName, color} = props
    return (
        <TouchableOpacity  {...props}  style={{...styles.btnContainer, backgroundColor: BUTTON_COLORS(color)}}>
            <Text style={{...styles.btnText}}>{btnName}</Text>
        </TouchableOpacity>
    )
}
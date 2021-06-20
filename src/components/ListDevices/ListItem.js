import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.number
}

const defaultProps = {

}

ListItem.prototype = propTypes

export default function ListItem({id, name, status}) {
    return (
        <TouchableOpacity style={styles.listItem} key={id} >
            {/* Title */}
           <View style={styles.listItemTitle}>
                <Text style={{flex: 1}}>{name}</Text>
                <Text style={{flex: 1}}>{name}</Text>
                <Text style={{flex: 1}}>{name}</Text>
           </View>
            {/* Body */}
           <View style={styles.listItemBody}>
               
           </View>

           {/* Footer */}
        </TouchableOpacity>
    )
}

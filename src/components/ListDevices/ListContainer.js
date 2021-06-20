import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import ListItem from './ListItem'

export default function ListContainer({list}) {
    return (
        <View>
            {
                list.map(i =>  <ListItem {...i} />)
            } 
        </View>
    )
}
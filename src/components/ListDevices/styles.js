import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex'
    },
    listItem: {
        borderBottomWidth: .45,
        borderColor: 'gray',
        padding: 20,
        margin: 1
    },
    listItemTitle: {
        display: 'flex',
        flexDirection: 'row',
    },
    listItemBody: {
        paddingTop: 5
    },
    itemTitle: {
        flex: 1
    }
})

export default styles
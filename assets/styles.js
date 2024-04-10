import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 32,
        backgroundColor: 'grey',
        color: 'white',
        padding: 16,
        text: {
            color: 'white'
        },
        zIndex: 1,
        width: '100%',
        height: 50
    },
    defaultButton: {
        maxHeight: 40,
        minWidth: 100,
        padding: 8,
        borderRadius: 4,
        backgroundColor: 'grey',
        text: {
            color: 'white'
        }
    }
})
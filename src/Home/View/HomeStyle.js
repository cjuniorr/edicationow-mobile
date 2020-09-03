import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center'
    },
    textInfo: {
        fontSize: 30,
        textAlign: 'center'
    },

    boxContent: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    box1: {
        backgroundColor: 'red',
        // flex: 1,
        height: 50,
        width: 50
    },
    box2: {
        backgroundColor: 'blue',
        // flex: 2,
        height: 50,
        width: 50
    },
    box3: {
        backgroundColor: 'green',
        // flex: 3,
        height: 50,
        width: 50
    },
})
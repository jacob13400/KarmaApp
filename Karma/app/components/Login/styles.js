import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    header: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    backgroundImage: {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    contents: {
        flex: 7,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    bookingButtonUse: {
        alignSelf: 'center', 
        width: 150, 
        height: 41, 
        borderRadius: 25, 
        marginTop: -10, 
        backgroundColor: '#FF6347',
        elevation: 3
    },
    inputSection: {
        flexDirection:'row', 
        paddingTop : 5, 
        paddingBottom: 5, 
        marginTop: 10, 
        marginBottom: 10, 
        marginLeft: 10,
    },
    inputField: {
        backgroundColor: '#F0F0F0', 
        width: '90%', 
        marginLeft: 10,
        borderRadius: 5
    }
})
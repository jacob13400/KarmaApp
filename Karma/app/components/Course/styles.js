import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    gauge: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '33%',
        paddingLeft: '8%'
      },
    gaugeText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 17,
      },
    classesDescription: {
        flex: 1, 
        backgroundColor: '#202020',
        width: "90%", 
        height: '10%',
        marginLeft: '5%',
        marginRight: '5%', 
        marginTop: '5%',
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },
    semester: {
        backgroundColor: '#404040', 
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderRadius: 5, 
        width: '15%',
        height: '85%'
    },
    semesterItem: {
        backgroundColor: 'grey'
    }
})
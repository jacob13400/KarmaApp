import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    gauge: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-57.8%',
        marginRight: '19.5%',
      },
    gaugeText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
      },
    classesDescription: {
        flex: 1, 
        backgroundColor: '#202020',
        width:"90%", 
        height: '10%',
        marginLeft: '5%',
        marginRight: '5%', 
        marginTop: '5%',
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },

})
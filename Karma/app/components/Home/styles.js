import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    parent: {
        flex: 1,
    },
    profileContainer: {
        height: 150,
        width: '100%',
        backgroundColor: '#3333FF',
    },
    contentsContainer: {
        flex: 2,
        backgroundColor:'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    scheduleTabContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        width: '100%'
    },
    box: {
      width: '90%',
      marginTop:10,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      shadowColor: '#051094',
      shadowOpacity: .2,
      shadowOffset: {
        height:1,
        width:-2
      },
      elevation:0,
      paddingTop:3,
      paddingBottom: 5,
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent:'space-around',
      borderRadius: 5,
      borderColor: '#FFFFFF',
    },
    CafeprofileImage: {
      borderRadius: 3, 
      borderColor: '#303030', 
      //borderWidth: 2
    },
    profileImage:{
		  alignSelf: 'stretch',
		  justifyContent: 'center',
      height: 150,
      width: '100%',
      borderRadius: 2,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    },
    backgroundImage: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
      height: '100%',
    },
    linearGradient: {     
      flex: 2,
      borderRadius: 0,
      width:'100%',
      height: '100%',
      opacity: 0.85,
    },
    offerImage:{
		  alignSelf: 'stretch',
		  justifyContent: 'center',
      height: "100%",
      width: "100%",
    },


}) 
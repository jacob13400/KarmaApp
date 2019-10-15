import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    backgroundImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: '100%',
    },
    profileImage: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 80, 
        height: 80,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#B0B0B0',
        paddingTop: 0,
        backgroundColor: 'black',
        marginTop: '5%'
    },
    classes: {
        flex: 1,
        backgroundColor: '#404040'
    },
    today: {
        color: '#F0F0F0', 
        marginLeft: 3, 
        marginTop: 3
    },
    classesDescription: {
        flex: 1, 
        backgroundColor: '#D0D0D0',
        width: 160, 
        height: '75%', 
        marginLeft: 20, 
        alignSelf: 'center',
        borderRadius: 5,
    },
    amenitiesDescription: {
        flex:.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        backgroundColor:'white',
    },
    amenitiesImage: {

        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        width: 28, 
        height: 28,

        paddingLeft: 10,
      
    },
    profileName: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        paddingTop: 5,
        fontSize: 18,
    },
    profileID: {
        alignSelf: 'center',
        color: '#808080'
    },
    profileDescriptionAmenitiesIcon: {
		alignSelf: 'stretch',
		justifyContent: 'center',
        width: 20,
        height: 19,
    },
    profileDescriptionCostIcon: {
		alignSelf: 'stretch',
		justifyContent: 'center',
        width: 13,
        height: 17,
    },    
    informationAmenities: {
        flex: .5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: 'red'
    },
    hairline: {
        backgroundColor: '#3831A1',
        height: 2,
        width: 350
      },
      linearGradient: {     
        flex: 2,
        borderRadius: 0,
        width:'100%',
        height: '100%',
        opacity: 0.75,
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },

      information: {
        flex: 3.5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 15,
        justifyContent: 'flex-start',
    },

    informationTime: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 15,
        flexDirection:'row',
        alignSelf: 'stretch',
    },

    timeDescription: {
        flex:1,
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    contentsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    box: {
        
      marginTop:10,
      backgroundColor: 'white',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:5,
        width:-2
      },
      elevation:2,
      paddingTop:10,
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent:'space-around',
      borderRadius: 25,
      height: 50,
      width: 150,
    },
    cafeImage:{
		alignSelf: 'stretch',
		justifyContent: 'center',
        height: 50,
        width: 50,
    },

})
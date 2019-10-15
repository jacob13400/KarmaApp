import React from 'react';
import { View, Text,TextInput, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-animated-swiper';
// import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
import jwt_decode from 'jwt-decode'

export default class Profile2 extends React.Component {
    constructor() {
      super()
      this.state = {
        mobile: '',
        password: '',
        firstName: '',
        middleName: '',
        lastName: '',
        userId: '',
        gender: '',

      }
    }
    
    static navigationOptions={
      header: null  
    }

    async getProfile(){
      const token =await AsyncStorage.getItem('id_token');
      console.log(token)
      var decoded = jwt_decode(token);
      return fetch('http://10.0.2.2:3000/private/people/people/details', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: decoded.userId
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        this.setState({firstName: responseData.classes.first_name,
          middleName: responseData.classes.middle_name,
          lastName: responseData.classes.last_name,
          gender: responseData.classes.gender})
      })
      .done();
    }

    componentDidMount(){   
      this.getProfile()
    }

    //   Have to enable dynamic Profile
    
    render(){        
      return(
        <View style={styles.parent}>
          <View style={{flex: 1}}>
            <Image style={styles.profileImage} source={require('../assets/index.jpeg')}/>
            <Text style={styles.profileName}>{this.state.firstName}</Text>
            <Text style={styles.profileID}>TVE18CS012</Text>
          </View>
          <View style={{flex:0.4}}>
            {/* Gap */}
          </View> 
          <View style={styles.classes}>
            <Text style={styles.today}>Today</Text> 
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
              <FlatList 
                data={[
                  {key: '0', 'subject': 'Calculus', 'startTime': '9:00', 'endTime': '10:00'},
                  {key: '1', 'subject': 'EDC', 'startTime': '10:00', 'endTime': '11:00'},
                  {key: '2', 'subject': 'DS', 'startTime': '11:00', 'endTime': '12:00'},
                  {key: '3', 'subject': 'DCS', 'startTime': '13:00', 'endTime': '14:00'},
                  {key: '4', 'subject': 'STLD', 'startTime': '14:00', 'endTime': '15:00'},
                ]}
                horizontal={true}
                renderItem={({item}) => <View style={styles.classesDescription}>
                    <Text>{item.subject}</Text>
                  </View>
                }/>
            </ScrollView>
          </View>
          <View style={{flex:0.3}}>
            {/* Gap */}
          </View>
          <View style={styles.classes}>

          </View>
          <View style={{flex:0.3}}>
            {/* Gap */}
          </View>
        </View>
        );
    }

}

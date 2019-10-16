import React from 'react';
import { View, Text,TextInput, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import jwt_decode from 'jwt-decode';
import Pie from 'react-native-pie';

export default class Profile2 extends React.Component {
    constructor() {
        super()
        this.state = {
          mobile: '',
          password: '',
          id: '',
          attendanceDetails: [],
          courseDetails: [{'name': 'Sample'},{'name': 'Sample'},{'name': 'Sample'},{'name': 'Sample'},{'name': 'Sample'},{'name': 'Sample'},],

        }
      }
    
      static navigationOptions={
        header: null  
      }
      async getAttendance(){
        const token =await AsyncStorage.getItem('id_token');
        console.log(token)
        var decoded = jwt_decode(token);
      let url = 'http://10.0.2.2:3000/private/student/student_attendance_data'
      url = url + '/' + decoded.userId;
      console.log(url)
      return fetch(url , {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData.classes)
          this.setState({attendanceDetails :responseData.classes})
        })
        .done();
      }
      async getCourses(){
        const token =await AsyncStorage.getItem('id_token');
        console.log(token)
        var decoded = jwt_decode(token);
      let url = 'http://10.0.2.2:3000/public/academics/courses_offered/'
      // url = url + '/' + decoded.userId;
      console.log(url)
      return fetch(url , {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((responseData) => {
          console.warn(responseData.classes)
          this.setState({courseDetails :responseData.classes})
        })
        .done();
      }
  
      componentWillMount(){   
        this.getAttendance();
        this.getCourses();
      }
  

    //   Have to enable dynamic Profile
    
    render(){
      return(
        <View style={styles.parent}> 
          <FlatList
            data={this.state.attendanceDetails}
            renderItem={({item}) => 
              <View style={styles.classesDescription}>
                <View style={{flex: 3}}>
                  <Text style={{color: 'white', width: '100%', fontSize: 18, textAlign: 'left', marginLeft: '5%', marginTop: 15}}>{this.state.courseDetails[item.course_id-1].name}</Text>
                  <Text style={{color: '#909090', width: '100%', fontSize: 18, textAlign: 'left', marginLeft: '5%', marginTop: 15}}>Attendance: {item.value}/{item.max_value}</Text>
                </View>
                {item.value/item.max_value*100 < 75? 
                  <View style={{flex: 1, paddingTop: "5%", paddingBottom: "20%"}}>
                    <Pie
                      radius={35}
                      innerRadius={30}
                      series={[item.value/item.max_value*100]}
                      colors={['#B00000']}
                      backgroundColor='#505050' />
                    <View style={styles.gauge}>
                      <Text style={styles.gaugeText}>{item.value/item.max_value*100}%</Text>
                    </View>
                  </View>: 
                  <View style={{flex: 1, paddingTop: "5%", paddingBottom: "20%"}}>
                    <Pie
                      radius={35}
                      innerRadius={30}
                      series={[item.value/item.max_value*100]}
                      colors={['green']}
                      backgroundColor='#505050' />
                    <View style={styles.gauge}>
                      <Text style={styles.gaugeText}>{item.value/item.max_value*100}%</Text>
                    </View>
                  </View>}
                </View>
                }
          />

        </View>
        );
    }

}

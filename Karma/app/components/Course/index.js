import React from 'react';
import { View, Text, Picker, TextInput, ScrollView, Image, ImageBackground, Linking, TouchableOpacity, FlatList, AsyncStorage, KeyboardAvoidingView } from 'react-native';
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
          markDetails: [],
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
      let url = 'http://api.cet.ac.in/private/student/student_attendance_data'
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
          // console.log(responseData.classes)
          this.setState({attendanceDetails :responseData.classes})
        })
        .done();
      }
      async getCourses(){
        const token =await AsyncStorage.getItem('id_token');
        console.log(token)
        var decoded = jwt_decode(token);
      let url = 'http://api.cet.ac.in/public/academics/courses_offered/'
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
          console.warn(responseData)
          this.setState({courseDetails :responseData.classes})
        })
        .done();
      }
      async getScore(){
        const token =await AsyncStorage.getItem('id_token');
        console.log(token)
        var decoded = jwt_decode(token);
      let url = 'http://api.cet.ac.in/private/student/student_course_internal_assessment'
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
          console.warn(responseData.data)
          this.setState({markDetails :responseData.data})
          
        })
        .done();
      }
  
      componentWillMount(){   
        // this.getAttendance();
        this.getScore();
        this.getCourses();
      }

      handleChange(itemValue) {
        this.setState({
          semester: itemValue
        })
      }
  

    //   Have to enable dynamic Profile
    
    render(){
      return(
        <View style={styles.parent}> 
          <ScrollView showsVerticalScrollIndicator= {false}>
            <View style={{marginLeft: '5%', marginTop: '4%', marginRight: '5%', marginBottom: '3%'}}>
              <Text style={{flex: 1, color: 'white', fontSize: 25, fontWeight: 'bold'}}>Courses</Text>
            </View>
            {/* <View style={{flexDirection: 'row', marginLeft: '5%', marginRight: '5%', height: 30, marginBottom: -15, borderRadius: 5}}>             
              <Picker selectedValue = {this.state.semester} style={styles.semester} onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue)}> 
                <Picker.Item label="S1" value="1" />
                <Picker.Item label="S2" value="2" />
                <Picker.Item label="S3" value="3" />
                <Picker.Item label="S4" value="4" />
                <Picker.Item label="S5" value="5" />
                <Picker.Item label="S6" value="6" />
                <Picker.Item label="S7" value="7" />
                <Picker.Item label="S8" value="8" />
              </Picker>
            </View> */}

            {/* This Semester selection shall be implemented later after data entry. */}

            {/* The series 2 marks have to be looped through and stored in another array */}
            <FlatList
              data={this.state.markDetails}
              renderItem={({item}) => 
                <View style={styles.classesDescription}>
                  <View style={{flex: 2.5}}>
                    <View style={{flex: 1}}>
                      <Text style={{color: 'white', width: '80%', fontSize: 18, textAlign: 'left', marginLeft: '5%', marginTop: 15}}>{this.state.courseDetails[item.course_id-1].name}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', marginTop: '-30%'}}>
                      <Text style={{color: '#909090', width: '100%', fontSize: 16, textAlign: 'left', marginLeft: '5%'}}>{item.type}: {item.marks_obtained}/{item.maximum_marks}</Text>
                    </View>
                  </View>
                  {item.marks_obtained/item.maximum_marks*100 < 35 ? 
                    <View style={{flex: 1, paddingTop: "5%", paddingBottom: "15%", alignItems: 'center', justifyContent: 'space-around'}}>
                      <Pie
                        radius={35}
                        innerRadius={30}
                        series={[item.marks_obtained/item.maximum_marks*100]}
                        colors={['#B00000']}
                        backgroundColor='#505050' />
                      <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>{item.marks_obtained/item.maximum_marks*100}%</Text>
                      </View>
                      <TouchableOpacity style={{backgroundColor: '#303030', width: '80%', height: '25%', marginRight: '5%', marginTop: '-10%', justifyContent: 'center', borderRadius: 5}}
                        onPress = {() => Linking.openURL('https://google.co.in')}>
                        <Text style={{color: 'white', textAlign: 'center', paddingBottom: '5%'}}>Syllabus</Text>
                      </TouchableOpacity> 
                    </View>
                    : 
                    <View style={{flex: 1, paddingTop: "5%", paddingBottom: '13%', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Pie
                        radius={35}
                        innerRadius={30}
                        series={[item.marks_obtained/item.maximum_marks*100]}
                        colors={['green']}
                        backgroundColor='#505050' />
                      <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>{item.marks_obtained/item.maximum_marks*100}%</Text>
                      </View>                      
                      <TouchableOpacity style={{backgroundColor: '#303030', width: '80%', height: '25%', marginRight: '5%', marginTop: '-10%', justifyContent: 'center', borderRadius: 5}}
                        onPress = {() => Linking.openURL('https://google.co.in')}>
                        <Text style={{color: 'white', textAlign: 'center', paddingBottom: '5%'}}>Syllabus</Text>
                      </TouchableOpacity>   
                    </View>
                  }
                </View>
              }
            />
            <View style={{height: 10}}></View>
          </ScrollView>
        </View>
        );
    }

}

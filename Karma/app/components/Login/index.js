import React from 'react';
import { View, Text,TextInput, Button, Alert, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
 

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      mobile: '',
      password: '',
      success: false,
    }
  }

  static navigationOptions={
    header: null  
  } 

  async storeKey(data){
    try {
        await AsyncStorage.setItem('id_token', data);
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
  }

  checkSignIn(){
    const { mobile, password } = this.state;
    
    if(mobile == '' && password == ''){
      console.warn("Logged In");
      this.props.navigation.navigate('CafeMain')
    }else{
      return fetch('http://13.235.74.171:8000/api/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'password': this.state.password,
            'username': this.state.email,

        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
            // if(responseData.response != "Error"){
              console.warn(responseData);
              this.storeKey(responseData.token);
              Alert.alert("Register", "You have Logged in successfully",[{text: "OK", onPress:() =>this.props.navigation.navigate('UserMain') }])
            // }else{
              Alert.alert("Register", "Login Failed")
            // }
      })
      .done();
    }
  }

  render() {
    return (
        <View style={styles.parent}>
          <View style={{flex:0.5}}>
          </View>
          <View style={{flex: 0.5}}>
            <Image source={require('./assets/spaceLogo.png')} style={{maxWidth: "100%", maxHeight: "100%",}} resizeMode={'contain'}></Image>
          </View>
          <KeyboardAvoidingView>
            <ScrollView>
              <View style={{flex: 3, margin: 25}}>
                  <View style={styles.inputSection}>
                    <Icon3 name="mobile-phone" color = "#3333FF" size={30} style={{alignSelf: 'center'}}></Icon3>
                    <View style={styles.inputField}>
                      <TextInput
                          value={this.state.mobile}
                          placeholder="Mobile No or Email Id"
                          onChangeText={(value) => this.setState({ mobile: value })}
                          placeholderTextColor="grey"
                          style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}                   
                          keyboardType="email"
                          autoCapitalize="none"
                      />  
                    </View>
                  </View>
                  <View style={styles.inputSection}>
                    <Icon name="md-lock" color = "#3333FF" size={30}  style={{alignSelf: 'center', marginLeft: -5}}></Icon>
                    <View style={styles.inputField}>
                      <TextInput
                          value={this.state.password}
                          placeholder="Password"
                          onChangeText={(value) => this.setState({ password: value })}
                          placeholderTextColor="grey"
                          style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                          secureTextEntry={true}
                          autoCapitalize="none"
                          keyboardType="default"
                      />
                    </View>
                  </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.bookingButtonUse}
              onPress={() => {this.checkSignIn()}}>
                <Text style={{color: 'white', textAlign: 'center', paddingTop: 10}}>Login</Text>
          </TouchableOpacity>
          <View style={{flex: 1,flexDirection: 'row', alignSelf: 'center', paddingTop: 15}}>
            <Text>New User?</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
              <Text style={{color: 'blue'}}>  Sign Up</Text>
            </TouchableOpacity>
          </View>           
        </View>
    );
  }
}
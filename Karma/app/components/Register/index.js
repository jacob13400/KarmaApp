import React from 'react';
import { View, Text,TextInput, Button, Alert, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
 
var STORAGE_KEY = 'id_token';

export default class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      mobile: '',
      password: '',
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      passwordRe: '',
      username: '',
      mobileCheck: true,
      passLengthCheck: true,
      passCheck: true,
      emailCheck: true,
      nullCheck: false,
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

  async Register(){
    if(this.state.emailCheck && this.state.passCheck & this.state.passLengthCheck && this.state.mobileCheck && this.state.nullCheck){
    return fetch('http://13.235.74.171:8000/api/users/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'password': this.state.password,
            'email': this.state.email,
            'username': this.state.username,
            'first_name': this.state.firstName,
            'phone': this.state.mobile

        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
            console.warn(responseData);
            this.storeKey(responseData.token);
            Alert.alert("Register", "You have Registered successfully",[{text: "OK", onPress:() =>this.props.navigation.navigate('UserMain') }])
      })
      .done();      
    }
      else{
          console.warn("Invalid Details");
      }
  }

  checkNumber(number){
    if(number.length == 10){
        this.setState({mobileCheck: true, nullCheck: true})
        console.warn("Valid Number", this.state.mobile)
    }else
        this.setState({mobileCheck: false})

  }
  
  checkName(name){
      let tempData = name.split(' ');
      this.setState({firstName: tempData[0], lastName: tempData[1]});
      console.warn(tempData[0]);
  }

  checkEmail(email){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(email) === false){
        this.setState({emailCheck: false});
    }else{
        this.setState({emailCheck: true, nullCheck: true});
        console.warn("Valid email");
    }
    
  }

  checkpasswordEquality(){
    if(this.state.password !== this.state.passwordRe)
        this.setState({passCheck: false})
    else{
        this.setState({passCheck: true, nullCheck: true})
        console.warn("Password Equality Valid")
    }    
  }

  checkpasswordLength(){
    if(this.state.password.length < 6)
        this.setState({passLengthCheck: false})
    else{
        console.warn("Password Length Valid")
        this.setState({passLengthCheck: true, nullCheck: true})
    }    
  }

  render() {
    return (
            <View style={styles.parent}>
                <View style={{flex: 0.5}}/>
                <View style={{flex: 1.2}}>
                    <Image source={require('./assets/spaceLogo.png')} style={{maxWidth: "100%", maxHeight: "100%",}} resizeMode={'contain'}></Image>
                </View>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <View style={{flex: 3, margin: 25, marginTop: 10}}>
                            <View style={styles.inputSection}>
                                <Icon3 name="mobile-phone" color = "#3333FF" size={30} style={{alignSelf: 'center', paddingLeft: 10}}></Icon3>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={this.state.mobile}
                                        placeholder="Mobile No"
                                        onChangeText={(value) => {this.setState({ mobile: value });this.checkNumber(value);}}
                                        placeholderTextColor="grey"
                                        style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                                        keyboardType="numeric"
                                        onSubmitEditing={() => {this.checkNumber(this.state.mobile)}}
                                    />
                                </View>
                            </View>
                            {this.state.mobileCheck ? null: <Text style={{color: 'red', padding : 5, margin: 10}}>Invalid Number</Text> }

                            
                            <View style={styles.inputSection}>
                                <Icon name="md-person" color = "#3333FF" size={30} style={{alignSelf: 'center'}}></Icon>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={this.state.name}
                                        placeholder="Name"
                                        onChangeText={(value) => {this.setState({ name: value });this.checkName(this.state.name);}}
                                        placeholderTextColor="grey"
                                        style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                                        keyboardType="default"
                                        onSubmitEditing={() => {this.checkName(this.state.name)}}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputSection}>
                                <Icon name="ios-mail" color = "#3333FF" size={30} style={{alignSelf: 'center', marginLeft: -3}}></Icon>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={this.state.email}
                                        placeholder="Email Id"
                                        onChangeText={(value) => {this.setState({ email: value });this.checkEmail(this.state.email);}}
                                        placeholderTextColor="grey"
                                        style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        onSubmitEditing={() => {this.checkEmail(this.state.email)}}
                                    />
                                </View>
                            </View>
                            {this.state.emailCheck ? null: <Text style={{color: 'red', padding : 5, margin: 10}}>Invalid Email</Text> }

                            
                            <View style={styles.inputSection}>
                                <Icon name="md-person" color = "#3333FF" size={30} style={{alignSelf: 'center'}}></Icon>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={this.state.username}
                                        placeholder="Username"
                                        onChangeText={(value) => this.setState({ username: value })}
                                        placeholderTextColor="grey"
                                        style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                                        keyboardType="default"
                                        autoCapitalize="none"
                                        // onSubmitEditing={() => {this.checkName(this.state.name)}} Have to make one here
                                    />
                                </View>
                            </View>

                            <View style={styles.inputSection}>
                                <Icon name="md-lock" color = "#3333FF" size={30} style={{alignSelf: 'center'}}></Icon>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={this.state.password}
                                        placeholder="Password"
                                        onChangeText={(value) => {this.setState({ password: value });this.checkpasswordEquality();
                                        this.checkpasswordLength();}}
                                        placeholderTextColor="grey"
                                        style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                                        secureTextEntry={true}
                                        keyboardType="default"
                                        onSubmitEditing={() => {this.checkpasswordEquality()
                                        this.checkpasswordLength()}}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputSection}>
                                <Icon name="md-lock" color = "#3333FF" size={30} style={{alignSelf: 'center'}}></Icon>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={this.state.passwordRe}
                                        placeholder="Confirm Password"
                                        onChangeText={(value) => {this.setState({ passwordRe: value });this.checkpasswordEquality()
                                        this.checkpasswordLength();}}
                                        placeholderTextColor="grey"
                                        style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                                        secureTextEntry={true}
                                        keyboardType="default"
                                        onSubmitEditing={() => {this.checkpasswordEquality()
                                        this.checkpasswordLength()}}
                                    />
                                </View>
                            </View>

                            {this.state.passCheck ? null: <Text style={{color: 'red', padding : 5, margin: 10}}>Password does not match</Text> }
                            {this.state.passLengthCheck ? null: <Text style={{color: 'red', padding : 5, margin: 10}}>Password length is less than 6</Text> }

                        </View>
                        <View style={{flex: 1}}/>
                        <View style={{flex: 1}}/>
                    </ScrollView>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.bookingButtonUse}
                        onPress={() => {this.Register()}}>
                            <Text style={{color: 'white', textAlign: 'center', paddingTop: 10}}>Register</Text>
                </TouchableOpacity>
                <View style={{flex: 1,flexDirection: 'row', alignSelf: 'center', paddingTop: 15}}>
                    <Text>Already a User?</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
                        <Text style={{color: 'blue'}}> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
  }
}
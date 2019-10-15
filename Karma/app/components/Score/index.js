import React from 'react';
import { View, Text,TextInput, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

export default class Profile2 extends React.Component {
    constructor() {
        super()
        this.state = {
          mobile: '',
          password: '',

        }
      }
    
      static navigationOptions={
        header: null  
      }


    //   Have to enable dynamic Profile
    
    checkSignIn(){
        console.warn("TEST")
        return fetch('http://10.0.2.2:3000/authentication/login/karma', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'password': this.state.password,
                'email': this.state.mobile,
            }),
          })
          .then((response) => response.json())
          .then((responseData) => {
            
            console.warn(responseData)
        })
          .done();
    }
    render(){
        
        return(
            <View style={styles.parent}>
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
                <Text style={{color: 'blue', textAlign: 'center', paddingTop: 10}}>Login</Text>
          </TouchableOpacity>
          
            </View>
        );
    }

}

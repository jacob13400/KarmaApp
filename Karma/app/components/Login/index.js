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
          mobile: 'rahulrs@cet.ac.in',
          password: '123456789abc',

        }
      }
    
      static navigationOptions={
        header: null  
      }

    //   Have to enable dynamic Profile
    
  async storeKey(data){
    try {
        await AsyncStorage.setItem('id_token', data);
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
  }
    checkSignIn(){
        console.warn("TEST")
        if(this.state.mobile === ''){
              this.storeKey("responseData.token");
              this.props.navigation.navigate('Main');
              return;
        }
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
              this.storeKey(responseData.token);
              // const tk =await AsyncStorage.getItem('id_token');
              // console.log(tk)
              this.props.navigation.navigate('Main');
        })
          .done();
    }
    render(){
        
        return(
          <View style={styles.parent}>
          <View style={{flex:0.5}}>
          </View>
          <View style={{flex: 0.5}}>
            {/* <Image source={require('./assets/spaceLogo.png')} style={{maxWidth: "100%", maxHeight: "100%",}} resizeMode={'contain'}></Image> */}
          </View>
          <KeyboardAvoidingView>
            <ScrollView>
              <View style={{flex: 3, margin: 25}}>
                  <View style={styles.inputSection}>
                    <Icon3 name="mobile-phone" color = "#FF6347" size={30} style={{alignSelf: 'center'}}></Icon3>
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
                    <Icon name="md-lock" color = "#FF6347" size={30}  style={{alignSelf: 'center', marginLeft: -5}}></Icon>
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
            <Text style={{color: '#909090'}}>New User?</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
              <Text style={{color: '#FF6347'}}>  Sign Up</Text>
            </TouchableOpacity>
          </View>           
        </View>
        );
    }

}

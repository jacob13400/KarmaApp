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
    
    render(){
        
      return(
        <View style={styles.parent}>
          <View style={{flex: 1}}>
            <Image style={styles.profileImage} source={require('../assets/index.jpeg')}/>
            <Text style={styles.profileName}>Rahul RS</Text>
            <Text style={styles.profileID}>TVE18CS012</Text>
          </View>
          
        </View>
        );
    }

}

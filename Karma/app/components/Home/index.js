import React from 'react';
import { View, Text, ScrollView,Image,  ImageBackground, TouchableOpacity, Button } from 'react-native';
import styles from './styles'
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Right, Body, Icon } from 'native-base';
import Swiper from 'react-native-animated-swiper';
import { setCustomText } from 'react-native-global-props';
import Icon3 from 'react-native-vector-icons/FontAwesome';
const customTextProps = { 
      style: { 
        fontFamily: 'Montserrat'
      }
    }
setCustomText(customTextProps);

export default class Schedule extends React.Component {

  constructor() {
    super()
    this.state = {      
    date_in: '',
    today: '',
    cafeName:[]
    }
  }
  static navigationOptions={
    header: null  
  } 

  componentDidMount(){
    let url = "http://13.235.74.171:8000/api/locations/"
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        cafeName: responseJson
      })
      console.warn(this.state.cafeName)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {

    const cafeList = this.state.cafeName.map((data) =>{

      // console.warn(dd.id)
      return(
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => {
          this.props.navigation.navigate('CafeView',{
            isUser: data.id
          })}} >
          <Card style={{elevation: 4, width: 250, marginLeft: 15}}>
            <CardItem cardBody>
              <Image style={styles.profileImage} source={require('../assets/cafeProfile.jpg')}  resizeMode="contain"/>
            </CardItem>
            <CardItem>
              <View style={{flex: 1, height: 50}}>
                <Text style={{fontSize: 17, alignContent: 'flex-start'}}>{data.location_name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Icon3 name="star" size={17} style={{color: 'gold', alignContent: 'flex-start', alignSelf: 'center'}}></Icon3>      
                  <Text style={{color: '#303030', alignSelf: 'flex-end', paddingTop: 2}}>  {data.rating}</Text>
                </View>
              </View>
              <View style={{flex: 1, alignSelf: 'flex-start'}}>
                <Text style={{color: '#303030', alignSelf: 'flex-end', paddingTop: 2}}>{data.open_time} - {data.close_time}</Text>
              </View>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )
  });

    
    return (
      <View style={styles.parent}>
        <LinearGradient style={[styles.backgroundImage, {alignItems: 'stretch'},styles.linearGradient ]}
                colors={['#FFFFFF', '#FFFFFF']}
                resizeMode="contain">
          <ScrollView>
            <View style={{height: 180, width: '100%', flex: 2}}>
              <Swiper
                backgroundColor={['#4285f4', '#0f9d58', '#f4b400', '#db4437']}
                dots
                dotsBottom={10}
                dotsColor="rgba(255, 255, 255, 0.25)"
                dotsColorActive="rgba(255, 255, 255, 0.75)">
                  <Image style={styles.offerImage} source={require('../assets/offer1.jpeg')}  resizeMode="stretch"/>
                  <Image style={styles.offerImage} source={require('../assets/offer1.jpeg')}  resizeMode="stretch"/>
                  <Image style={styles.offerImage} source={require('../assets/offer1.jpeg')}  resizeMode="stretch"/>
                  <Image style={styles.offerImage} source={require('../assets/offer1.jpeg')}  resizeMode="stretch"/>
              </Swiper>
            </View>
            <View style={styles.contentsContainer, {flex:10}}>
              <View style={{width: '30%', justifyContent: 'flex-start'}}>
                <View style={styles.box, {alignSelf: 'center', paddingTop: 20}}>
                  <Text style={[styles.name, {fontSize: 17,color: 'black'}]}>Top Rated</Text>
                </View>
                <View style={{
                    borderBottomColor: '#D0D0D0',
                    borderBottomWidth: 1.25,
                    width: '303%',
                    marginLeft: 15,
                    paddingTop: 5,
                    alignSelf: 'flex-start'
                  }}
                />
              </View>      
              <View style={{flex:5}}>  
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.scheduleTabContainer}>

                    {cafeList}

                  </View>
                </ScrollView>
                <View style={{width: '30%', justifyContent: 'flex-start'}}>
                  <View style={styles.box, {alignSelf: 'center', paddingTop: 20}}>
                    <Text style={[styles.name, {fontSize: 17,color: 'black'}]}>Near You</Text>
                  </View>
                  <View style={{
                      borderBottomColor: '#D0D0D0',
                      borderBottomWidth: 1.25,
                      width: '303%',
                      marginLeft: 15,
                      paddingTop: 5,
                      alignSelf: 'flex-start'
                    }}
                  />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.scheduleTabContainer}>
                    
                    {cafeList}

                    <View style={{
          			        borderBottomColor: '#DCDCDC',
              			    borderBottomWidth: 1,
              			    width: '30%',
          	     		    paddingTop: 5,
          			        alignSelf: 'center'
          			      }}
          			    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
} 
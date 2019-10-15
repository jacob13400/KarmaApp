import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Home from './app/components/Home';


const HomeStack = createStackNavigator(
  {
    Home: Home,
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions:{  
      tabBarLabel:'Home',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-home" color={tintColor} size={25}/>  
      )  
    }  
  },
},
{
  initialRouteName: 'StartUser'
})

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle,
    header: null
  };
};


const AppNavigator = createStackNavigator({
  Tab: TabNavigator,
}
)

export default createAppContainer(createSwitchNavigator(
  {
    Main: { screen: AppNavigator },
    Login: Login,
    Register: Register,

  },
  {
    initialRouteName: 'Login',
  }
),

);
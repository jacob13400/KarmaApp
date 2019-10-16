import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import Attendance from './app/components/Attendance';
import Course from './app/components/Course';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import styles from './app/components/Profile/styles';


const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
  }
);

const AttendanceStack = createStackNavigator(
  {
    Attendance: Attendance,
  }
);

const CourseStack = createStackNavigator(
  {
    Course: Course,
  }
);


// const CafeScheduleStack = createStackNavigator(
//   {
//     Schedule: CafeSchedule,
//   }, {headerLayoutPreset: 'center'}
// );

// const CafeProfileStack = createStackNavigator(
//   {
//     Profile: CafeProfile,
//   }
// );
const TabNavigator = createBottomTabNavigator({
  // Home: {
  //   screen: CafeHomeStack,
  //   navigationOptions:{  
  //     tabBarLabel:'Home',  
  //     tabBarIcon:({tintColor})=>(  
  //         <Icon name="ios-home" color={tintColor} size={25}/>  
  //     )  
  //   }  
  // },
  // History: {
  //   screen: CafeScheduleStack,
  //   navigationOptions:{  
  //     tabBarLabel:'History',  
  //     tabBarIcon:({tintColor})=>(  
  //         <Icon name="md-time" color={tintColor} size={25} />  
  //     )  
  //   }  
  // },
  Attendance: {
    screen: AttendanceStack,
    navigationOptions:{
      header: null,  
      tabBarLabel:'Attendance', 
      tabBarOptions : {
        activeTintColor: '#F0F0F0',
        style: {
          backgroundColor: '#101010',
        }
      }, 
      tabBarIcon:({tintColor})=>(  
          <Icon2 name="solution1" color={tintColor} size={25} />  
      )  
    }  
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions:{
      header: null,  
      tabBarLabel:'Profile',
      tabBarOptions : {
        activeTintColor: '#F0F0F0',
        style: {
          backgroundColor: '#101010',
        }
      },  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-person" color={tintColor} size={25} />  
      )  
    }  
  },
  Course: {
    screen: CourseStack,
    navigationOptions:{
      header: null,  
      tabBarOptions : {
        activeTintColor: '#F0F0F0',
        style: {
          backgroundColor: '#101010',
        }
      },
      tabBarLabel:'Course',  
      tabBarIcon:({tintColor})=>(  
          <Icon2 name="book" color={tintColor} size={25} />  
      ),  
    }
  },
},{
  initialRouteName: 'Profile'
})

const AppNavigator = createStackNavigator({
  Tab: TabNavigator,
},
)

// CafeTabNavigator.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];

//   // You can do whatever you like here to pick the title based on the route name
//   const headerTitle = routeName;

//   return {
//     headerTitle,
//     header: null
//   };
// };


// const UserHomeStack = createStackNavigator(
//   {
//     Home: UserHome,
//   }
// );

// const UserProfileStack = createStackNavigator(
//   {
//     Home: UserProfile,
//   }
// );

// const UserProfileStack2 = createStackNavigator(
//   {
//     Home2: UserProfile2,
//   }
// );

// const UserStartStack = createStackNavigator(
//   {
//     UserStart: UserStart,
//   }
// );

// const UserTabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: UserHomeStack,
//     navigationOptions:{  
//       tabBarLabel:'Home',  
//       tabBarIcon:({tintColor})=>(  
//           <Icon name="ios-home" color={tintColor} size={25}/>  
//       )  
//     }  
//   },
//   StartUser:  {
//     screen: UserStartStack,
//     navigationOptions:{  
//       tabBarLabel:'Explore',  
//       tabBarIcon:({tintColor})=>(  
//           <Icon name="ios-planet" color={tintColor} size={25}/>  
//       )  
//     }  
//   },
//   Profile2: {
//     screen: UserProfileStack2,
//     navigationOptions:{  
//       tabBarLabel:'Profile',  
//       tabBarIcon:({tintColor})=>(  
//           <Icon name="ios-person" color={tintColor} size={25} />  
//       )  
//     }  
//   },
// },
// {
//   initialRouteName: 'StartUser'
// })

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;
  
  return {
    headerTitle,
    header: null,    
  };
};


// const UserAppNavigator = createStackNavigator({
//   Tab: UserTabNavigator,
//   Cafe1: CafeProfile,
//   Cafe2: CafeProfile2,
//   FootPrint: UserFootPrint,
//   Book: Booking,
//   CafeView: UserCafeView,
//   Pass: Passes
// }
// )

export default createAppContainer(createSwitchNavigator(
  {
    Main: { screen: AppNavigator },
    Login: Login,
  },
  {
    initialRouteName: 'Login',
  }
),

);
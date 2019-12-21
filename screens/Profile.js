import React, {Component} from 'react';
import { View, Text} from 'react-native';



import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Halamanakun from './profile/Akun';
import Halamankontak from './profile/Kontak';
const TabScreen = createMaterialTopTabNavigator(
  {
    Akun: Halamanakun ,
    Kontak: Halamankontak ,
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#FF9800',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);

const TabHelper = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
    },
  },
});

// class Profile extends Component {

  
// static navigationOptions = {
//   title: 'Profile Activity',
//   };


  
//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Profile Activity Screen</Text>
//         </View>
//       );
//     }
// }

export default TabHelper
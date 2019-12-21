import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './screens/Home';
import Splash from './screens/Splash';
import Settings from './screens/Settings';
import Details from './screens/Details';
import Profile from './screens/Profile';



const HomeTab = createStackNavigator(
  {
    Splash: Splash,
    Home: Home ,
    Details: Details ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
    },
  }
);

const ProfileTab = createStackNavigator(
  {
    Profile: Profile ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);

const SettingsTab = createStackNavigator(
  {
    Settings: Settings ,
    Details: Details ,
    Profile: Profile ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);

const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Profile: ProfileTab ,
    Settings: SettingsTab ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Home':
              return (
                <Image
              source={ require('./assets/home.png') }
              style={{ width: 20, height: 20, }} />
              );
            
            break;
          case 'Profile':
              return (
            <Image
              source={ require('./assets/profile.png') }
              style={{ width: 20, height: 20 }} />
              );
            break;
          case 'Settings':
              return (
            <Image
            source={ require('./assets/settings.png') }
            style={{ width: 20, height: 20 }} />
              );
            break;
        }

      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);




export default createAppContainer(MainApp);

import React, { Component } from 'react'; 
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class Settings extends Component {
 
  static navigationOptions = {
      title: 'Settings',
  };

  render() {
    return (
      <View style={{flex:1}}>
          <View style={{flex:1}}>
          <View style={{flex:1,flexDirection: 'row'}}>
            <View style={{flex:1, height: 50,backgroundColor: 'blue'}} />
            <View style={{flex:1, height: 50,backgroundColor: 'red'}} />
            <View style={{flex:1, height: 50,backgroundColor: 'aqua'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'tosqa'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'green'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'yellow'}}/>
          </View>
          <View style={{flex:1,flexDirection: 'row'}}>
            <View style={{flex:1, height: 50,backgroundColor: 'blue'}} />
            <View style={{flex:1, height: 50,backgroundColor: 'red'}} />
            <View style={{flex:1, height: 50,backgroundColor: 'aqua'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'tosqa'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'green'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'yellow'}}/>
          </View>

          </View>
          <View style={{flex:1,flexDirection: 'row'}}>
            <View style={{flex:1, height: 50,backgroundColor: 'blue'}} />
            <View style={{flex:1, height: 50,backgroundColor: 'red'}} />
            <View style={{flex:1, height: 50,backgroundColor: 'aqua'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'tosqa'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'green'}}/>
            <View style={{flex:1, height: 50,backgroundColor: 'yellow'}}/>
          </View>
      </View>
      
      
    );
  }
}

export default Settings
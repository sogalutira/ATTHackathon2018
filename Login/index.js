import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>You Are Logged Into Your Profile</Text>
      </View>
    );
  }
}

export default LoginScreen;
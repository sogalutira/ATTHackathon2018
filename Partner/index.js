import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class PartnerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Your Dining Partner</Text>
      </View>
    );
  }
}

export default PartnerScreen;
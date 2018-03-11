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
        <Button
        	title="End"
        	onPress={() => this.props.navigation.navigate('End')}
        />
      </View>
    );
  }
}

export default PartnerScreen;
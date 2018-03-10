import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class LocationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Where do you want to eat?</Text>
        <Button
        	title="Go to Time"
        	onPress={() => this.props.navigation.navigate('Time')}
        />
      </View>
    );
  }
}

export default LocationScreen;
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class TimeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Select A Time</Text>
        <Button
        	title="Go to Partner"
        	onPress={() => this.props.navigation.navigate('Partner')}
        />
      </View>
    );
  }
}

export default TimeScreen;
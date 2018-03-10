import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class CreateProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up</Text>
        <Button
        	title="Go to Location"
        	onPress={() => this.props.navigation.navigate('Location')}
        />
      </View>
    );
  }
}

export default CreateProfileScreen;
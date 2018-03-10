import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import CreateProfileScreen from './CreateProfile';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Create Profile"
          onPress={() => this.props.navigation.navigate('ProfileForm')}
        />
      </View>
    );
  }
}


export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  ProfileForm: {
    screen: CreateProfileScreen,
  }
});



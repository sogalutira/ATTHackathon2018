import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import CreateProfileScreen from './SignUp/CreateProfile';
import LocationScreen from './Location/index';
import PartnerScreen from './Partner/index';
import TimeScreen from './Time/index';

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
  },
  Location: {
    screen: LocationScreen,
  },
  Time: {
    screen: TimeScreen,
  },
  Partner: {
    screen: PartnerScreen,
  },
});



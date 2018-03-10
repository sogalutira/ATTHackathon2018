import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class LocationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Where do you want to eat?</Text>
        <TextInput style={{borderColor: '#7a42f4', borderWidth: 1, width:'90%'}}
           underlineColorAndroid = "transparent"
           placeholder = "Search Me"
           placeholderTextColor = "#9a73ef"
           autoCapitalize = "none"
           onChangeText = {this.handleEmail}/>
        <Text>Places Nearby</Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}}>
            <Text>I'm a restaurant!</Text>
          </View>
          <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}}>
            <Text>So am I!</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}}>
            <Text>You should eat here!</Text>
          </View>
          <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}}>
            <Text>No, eat here!</Text>
          </View>
        </View>
        <Button
        	title="Go to Time"
        	onPress={() => this.props.navigation.navigate('Time')}
        />
      </View>
    );
  }
}

export default LocationScreen;
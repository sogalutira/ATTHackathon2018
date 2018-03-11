import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'burgers, fast food, Italian...'
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2a6ea7' }}>
        <Text style={{fontFamily:'playfairDisplay', marginTop:10, marginBottom:10, fontWeight:'bold', fontSize: 25, color:'white'}}>What Do You Want To Eat?</Text>
        <TextInput style={{borderColor: '#F1FAEE', borderWidth: 2, width:'90%', padding:10, backgroundColor: 'white' }}
           placeholder ={this.state.text}
           placeholderTextColor = "gray"
        />
        <Text style={{fontFamily:'playfairDisplay', marginTop:10, marginBottom:10, fontWeight:'bold', fontSize: 20, color:'white'}}>Places Nearby</Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <View style={{width: 150, height: 150, backgroundColor: '#FFE74C', marginBottom:25}}>
            <Text style={{textAlign: 'center'}}>I'm a restaurant!</Text>
          </View>
          <View style={{width: 150, height: 150, backgroundColor: '#87A330', marginBottom:25}}>
            <Text style={{textAlign: 'center'}}>So am I!</Text>
          </View>
          <View style={{width: 150, height: 150, backgroundColor: '#FFE74C', marginBottom:25}}>
            <Text style={{textAlign: 'center'}}>You should eat here!</Text>
          </View>
          <View style={{width: 150, height: 150, backgroundColor: '#87A330', marginBottom:25}}>
            <Text style={{textAlign: 'center'}}>No, eat here!</Text>
          </View>
        </View>
        <Button style={{backgroundColor:'white', padding:5, color: 'black'}}
        	title="Go to Time"
        	onPress={() => this.props.navigation.navigate('Time')}
        />
      </View>
    );
  }
}

export default LocationScreen;
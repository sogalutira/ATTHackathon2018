import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	TextInput,
	Form } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { Button } from 'react-native-elements'
import axios from 'axios';

class CreateProfileScreen extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
    	text: 'Placeholder Text' 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
  	this.props.navigation.navigate('Location')
  // 	var update = {
	 //    id: 2,
	 //    name: 'yourValue',
	 //    location: 'McDonalds',
		//   time: '6:00am',
		//   partner: null,
		//   username: null,
		//   password: null
	 //  };
		// return fetch('http://localhost:3000/api/docs', {
		// 	method: 'POST',
		// 	headers: {
	 //      'Accept': 'application/json',
	 //      'Content-Type': 'application/json',
	 //    },
		//   body: JSON.stringify(update),
		// })
	 //    .then((response) => response.json())
	 //    .then((responseJson) => {
	 //      console.log (responseJson);
	 //    })
	 //    .then(() => this.props.navigation.navigate('Location'))
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up</Text>
        <TextInput
        	style={{height: 40, width: '80%', borderColor: 'black', borderWidth: 1}}
        	onChangeText={(text) => this.setState({text})}
        	value={this.state.text}
      	/>
        <Button
				  raised
				  title='Go to Location'
				  onPress={this.handleSubmit}
				/>
      </View>
    );
  }
}

export default CreateProfileScreen;
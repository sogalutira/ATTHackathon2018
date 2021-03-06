import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { Button } from 'react-native-elements';
import { Font, LinearGradient } from 'expo';

class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Burgers, Fast Food, Italian...'
    };
  }

  render() {
    return (
      <LinearGradient colors={['#2a6ea7', '#1a4569' , '#13344f']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontFamily:'playfairDisplay', marginTop:50, marginBottom:10, fontWeight:'bold', fontSize: 30, textAlign:'center', color:'white'}}>What Do You Want To Eat?</Text>
        <TextInput style={{borderColor: '#F1FAEE', borderWidth: 2, width:'90%', padding:10, backgroundColor: 'white', borderRadius:3 }}
           placeholder ={this.state.text}
           placeholderTextColor = "gray"
        />
        <Text style={{fontFamily:'playfairDisplay', marginTop:20, marginBottom:20, fontWeight:'bold', fontSize: 25, color:'white'}}>Places Nearby:</Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <View style={{width: 150, height: 150, marginBottom:35}}>
            <Image source={{uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/xNzhwhPZhfeRy-wFU_GXlQ/ls.jpg'}} style={{width: 150, height: 150}} />
            <Text style={{textAlign: 'center', fontWeight:'bold', color: 'white'}}>McDonald's Kaimuki</Text>
          </View>
          <View style={{width: 150, height: 150, marginBottom:35}}>
            <Image source={{uri: 'https://s3-media3.fl.yelpcdn.com/bphoto/MyHj1f4qjaYer0-cFqEhsA/ls.jpg'}} style={{width: 150, height: 150}} />
            <Text style={{textAlign: 'center', fontWeight:'bold', color: 'white'}}>Koko Head Cafe</Text>
          </View>
          <View style={{width: 150, height: 150, backgroundColor: '#FFE74C', marginBottom:35}}>
            <Image source={{uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/7t_SEkeLSpOV_Ew6XvH8VQ/ls.jpg'}} style={{width: 150, height: 150}} />
            <Text style={{textAlign: 'center', fontWeight:'bold', color: 'white'}}>Kan Zaman</Text>
          </View>
          <View style={{width: 150, height: 150, backgroundColor: '#87A330', marginBottom:35}}>
            <Image source={{uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/wpf2aklTQYp_aw924DZ2QA/348s.jpg'}} style={{width: 150, height: 150}} />
            <Text style={{textAlign: 'center', fontWeight:'bold', color: 'white'}}>W & M Bar-B-Q Burger</Text>
          </View>
        </View>
        <Button
          small
          buttonStyle={{width: 200, margin: 10, backgroundColor: '#157efb', borderRadius: 3, marginBottom:50}}
          fontFamily='raleway'
        	title="Go to Time"
        	onPress={() => this.props.navigation.navigate('Time')}
        />
      </LinearGradient>
    );
  }
}

export default LocationScreen;
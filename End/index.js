import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Font } from 'expo';

class EndScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'raleway': require('../assets/fonts/Raleway.ttf'),
      'playfairDisplay': require('../assets/fonts/PlayfairDisplay.ttf')
    });

    this.setState({
      fontLoaded: true
    });
  }

  render() {
    if(this.state.fontLoaded) {
      return (
        <View style={[styles.flex, styles.background]}>
          <Text style={[styles.text, styles.desc]}>Your reservation is set,</Text>
          <Text style={[styles.text, styles.main]}>Bon Appétit!</Text>
          <Icon
            name='local-dining'
            color='white'
            size={80}
          />
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    backgroundColor: '#2a6ea7'
  },
  text: {
    color: 'white'
  },
  main: {
    fontFamily: 'playfairDisplay',
    fontSize: 50,
    marginBottom: 20
  },
  desc: {
    fontFamily: 'raleway',
    fontSize: 20
  }
});

export default EndScreen;
import React from 'react';
import {
  Container,
  Button,
  Text,
  Card, CardItem, Left, Body, Right
} from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font, LinearGradient } from 'expo';

class PartnerScreen extends React.Component {
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
        <LinearGradient colors={['#2a6ea7', '#1a4569' , '#13344f']} style={[styles.flex, styles.background]}>
          <Text style={text.title}>Your dining partner,</Text>
          <Container style={[styles.flex, styles.container]}>
            <Image
              style={{width:295, height:300, marginBottom:10}}
              source={{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb'}}
            />
            <Text style={text.desc}>John Smith, 25</Text>
            <Card>
              <CardItem>
                <Body>
                  <Text style={text.text}>Bio: I like cats.</Text>
                  <Text style={{color:'green'}}>5 mins away</Text>
                </Body>
              </CardItem>
            </Card>
            <Button
              block
              style={{marginTop:10}}
              onPress={() => this.props.navigation.navigate('End')}
            >
              <Text>
                Next
              </Text>
            </Button>
          </Container>
        </LinearGradient>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  background: {
    backgroundColor: '#2a6ea7',
    padding: 30,
    paddingBottom: 95
  },
  container: {
    backgroundColor: 'ghostwhite',
    borderRadius:  5,
    padding: 10
  }
});

const text = StyleSheet.create({
  title: {
    fontFamily: 'playfairDisplay',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    marginBottom: 30
  },
  desc: {
    fontFamily: 'raleway',
    fontSize: 30,
    marginBottom: 10
  },
  text: {
    fontFamily: 'raleway'
  }
});

export default PartnerScreen;
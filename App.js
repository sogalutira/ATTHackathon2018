import React from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Icon,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Form,
  Item,
  Input,
  Label
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Image } from 'react-native';
import { Font } from 'expo';
import {
  StackNavigator,
} from 'react-navigation';
import LocationScreen from './Location/index';
import PartnerScreen from './Partner/index';
import TimeScreen from './Time/index';
import EndScreen from './End/index';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'raleway': require('./assets/fonts/Raleway.ttf'),
      'playfairDisplay': require('./assets/fonts/PlayfairDisplay.ttf')
    });

    this.setState({
      fontLoaded: true
    });
  }
  render() {
    if(this.state.fontLoaded) {
      return (
        <Container style={[styles.flex, styles.background]}>
          <Text style={text.title}>Table for Two</Text>
          <Text style={text.desc}>Never eat alone again.</Text>
          <Container style={[styles.flex, styles.container]}>
            <Tabs>
              <Tab style={[styles.flex,styles.tab]} heading={ <TabHeading><Text>Login</Text></TabHeading>}>
                <Text style={{fontFamily:'playfairDisplay', fontSize:20, textAlign:'center', marginBottom:20}}>Login to your account</Text>
                <Form>
                  <Item fixedLabel style={{marginBottom:15}}>
                    <Label style={{fontFamily:'raleway'}}>Username</Label>
                    <Input />
                  </Item>
                  <Item fixedLabel last style={{marginBottom:30}}>
                    <Label style={{fontFamily:'raleway'}}>Password</Label>
                    <Input />
                  </Item>
                  <Button block ><Text style={{fontFamily:'raleway'}}>Login</Text></Button>
                </Form>
              </Tab>
              <Tab style={[styles.flex, styles.tab]} heading={ <TabHeading><Text>Sign Up</Text></TabHeading>}>
                <Text style={{fontFamily:'playfairDisplay', fontSize:20, textAlign:'center', marginBottom:20}}>Create an account</Text>
                <Form>
                  <Item fixedLabel style={{marginBottom:15}}>
                    <Label style={{fontFamily:'raleway'}}>Username</Label>
                    <Input />
                  </Item>
                  <Item fixedLabel last style={{marginBottom:15}}>
                    <Label style={{fontFamily:'raleway'}}>Password</Label>
                    <Input />
                  </Item>
                  <Item fixedLabel last style={{marginBottom:30}}>
                    <Label style={{fontFamily:'raleway'}}>Age</Label>
                    <Input />
                  </Item>
                  <Button block ><Text style={{fontFamily:'raleway'}}>Submit</Text></Button>
                </Form>
              </Tab>
            </Tabs>
          </Container>
        </Container>
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
    paddingBottom: 125
  },
  container: {
    backgroundColor: 'ghostwhite',
    borderRadius: 5,
    padding: 10
  },
  tab: {
    padding: 10
  }
});

const text = StyleSheet.create({
  title: {
    fontFamily: 'playfairDisplay',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginTop: 30
  },
  desc: {
    fontFamily: 'raleway',
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginBottom: 30
  },
  text: {
    fontFamily: 'raleway',
  }
});

export default StackNavigator({
  Home: {
    screen: HomeScreen,
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
  End: {
    screen: EndScreen,
  }
});



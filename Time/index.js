import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { Button } from 'react-native-elements'

var newTime;

class TimeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: '',
      timeRange1: '',
      timeRange2: '',
      timeRange3: '',
      timeRange4: ''
    }
    this.formatAMPM = this.formatAMPM.bind(this);
    this.getTimeRange1 = this.getTimeRange1.bind(this);
    this.getTimeRange2 = this.getTimeRange2.bind(this);
  }

  formatAMPM = (date) => {
    var timeIncrement = [1,2,3,4,5];
    var time = new Date();
    newTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    // var timeRange = time.setHours(time.getHours() + 5);
    var hours = time.getHours();
    var newHours = hours + 5;
    var minutes = time.getMinutes();
    var ampm = newHours >= 12 ? 'pm' : 'am';
    newHours = newHours % 12;
    newHours = newHours ? newHours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = newHours + ':' + minutes + ' ' + ampm;
    this.setState({currentTime: newTime});
  }

  getTimeRange1 = () => {
    var time = new Date();
    // var timeRange = time.setHours(time.getHours() + 5);
    var hours = time.getHours();
    var newHours = hours + 1;
    var minutes = time.getMinutes();
    var ampm = newHours >= 12 ? 'pm' : 'am';
    newHours = newHours % 12;
    newHours = newHours ? newHours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = newHours + ':' + minutes + ' ' + ampm;
    this.setState({timeRange1: strTime});  
  }

    getTimeRange2 = () => {
      var time = new Date();
      // var timeRange = time.setHours(time.getHours() + 5);
      var hours = time.getHours();
      var newHours = hours + 2;
      var minutes = time.getMinutes();
      var ampm = newHours >= 12 ? 'pm' : 'am';
      newHours = newHours % 12;
      newHours = newHours ? newHours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = newHours + ':' + minutes + ' ' + ampm;
      this.setState({timeRange2: strTime});  
    }

  componentDidMount() {
    this.formatAMPM();
    this.getTimeRange1();
    this.getTimeRange2();
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Select A Time</Text>
        <Button
          title={this.state.currentTime}
          buttonStyle={{margin: 10}}
          onPress={() => this.props.navigation.navigate('Partner')}
        />
        <Button
          title={this.state.timeRange1}
          buttonStyle={{margin: 10}}
          onPress={() => this.props.navigation.navigate('Partner')}
        />
        <Button
          title={this.state.timeRange2}
          buttonStyle={{margin: 10}}
          onPress={() => this.props.navigation.navigate('Partner')}
        />
      </View>
    );
  }
}

export default TimeScreen;
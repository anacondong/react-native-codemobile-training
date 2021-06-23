
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Orientation from 'react-native-orientation-locker';


class BodyIOS extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orientation: 'PORTRAIT',
    }
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._onOrientationDidChange);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._onOrientationDidChange);
  }

  _onOrientationDidChange = (orientation) => {
    this.setState({ orientation })
  }


  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 44 }}>
        
        <Text style={{fontWeight: 'bold', fontSize: 18, alignSelf: 'center', marginBottom: 16}}>Codemobiles Header IOS</Text>
        <Text>Current UI Orientation: {this.state.orientation}</Text>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 50, flexWrap: 'wrap' }}>
          <View style={{ backgroundColor: 'red', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'orange', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'gray', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'blue', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'pink', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'yellow', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'green', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'red', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'orange', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'gray', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'blue', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'pink', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'yellow', width: 50, height: 50, margin: 5 }} />
          <View style={{ backgroundColor: 'green', width: 50, height: 50, margin: 5 }} />
        </View>
      </View>
    );
  }
}

export default BodyIOS;

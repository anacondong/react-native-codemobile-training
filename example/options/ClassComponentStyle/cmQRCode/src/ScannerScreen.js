import React, { Component } from "react";

import {
  View,  
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";

export default class ScannerScreen extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isReady: false
    }
  }
  

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isReady: true})
    }, 500)
  }

  onSuccess = function(e){
    const onResult = this.props.navigation.getParam("onResult");
    onResult(e.data);
    this.props.navigation.goBack();
  }

  scanAgain = ()=>{
    this.scanner.reactivate();
  }

  showScanner = () => {
    return (
      <View style={{ flex: 1, backgroundColor:"black" }}>
        <QRCodeScanner
          ref={node=>{this.scanner = node}}
          showMarker
          style={{ flex: 1 }}
          onRead={this.onSuccess.bind(this)}
          bottomContent={
            <TouchableOpacity
              onPress={this.scanAgain}
              style={styles.buttonTouchable}
            >
              <Text style={styles.buttonText}>SCAN</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isReady ? this.showScanner() : (
          <Text>Loading...</Text>
        )}
      </View>
    )
  }
}




ScannerScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Scanner",
    headerStyle: {
      backgroundColor: "#3F51B5"
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" }
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777"
  },
  buttonText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFF"
  },
  buttonTouchable: {
    height: 50,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fa4a4d"
  }
});

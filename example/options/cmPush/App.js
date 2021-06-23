import React, { Component } from "react";
import { Text, View } from "react-native";
import OneSignal from "react-native-onesignal";

export default class App extends Component {
  constructor(properties) {
    super(properties);
  
  }

  componentDidMount(){    
    OneSignal.init("9f6b1eb8-bf54-49d6-bf81-46149170e1da");
    OneSignal.getPermissionSubscriptionState(status => {
      userID = status.userId;
      alert(userID);
    });

    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);

    
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log("Message: ", openResult.notification.payload.body);
    console.log("Data: ", openResult.notification.payload.additionalData);
    console.log("isActive: ", openResult.notification.isAppInFocus);
    console.log("openResult: ", openResult);
  }

  onIds(device) {
    console.log("Device info: ", device);
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

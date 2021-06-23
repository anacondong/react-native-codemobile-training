/**
 * @format
 */

import {AppRegistry,Alert} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OneSignal from 'react-native-onesignal';

AppRegistry.registerComponent(appName, () => App);

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId(""); // appID
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log("Prompt response:", response);
  Alert.alert("Prompt response:");
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  Alert.alert("OneSignal: notification will show in foreground:");
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  Alert.alert("notification: ");
  const data = notification.additionalData
  console.log("additionalData: ", data);
  Alert.alert("additionalData: ");
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
  Alert.alert("OneSignal: notification opened: ");
});
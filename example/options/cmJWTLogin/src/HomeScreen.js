import React, {Component} from 'react';
import {View, Text, Alert, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import {httpClient} from './HttpClient';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  async componentDidMount() {
    let account = {username: 'admin', password: '1234'};
    try {
      // Register
      let resultRegister = await httpClient.post('/register', account);
      console.log(JSON.stringify(resultRegister.data));

      // Login
      let resultLogin = await httpClient.post('/login', account);
      await AsyncStorage.setItem('token', resultLogin.data.token);
      console.log(JSON.stringify(resultLogin.data));

      // Feed
      this.feed()
      //let resultFeed = await httpClient.get('/feed');
      //Alert.alert(JSON.stringify(resultFeed.data));
    } catch (error) {
      Alert.alert(JSON.stringify(error));
    }
  }

  async feed() {
    this.state = {feedData: 'loading..'};
    const token = await AsyncStorage.getItem('token');

    let response = await httpClient.get('http://172.20.10.4:8082/api/v1/feed', {
      headers: {'x-access-token': token},
    });
    const result = response.data.result;
    alert(JSON.stringify(result));
  }

  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
    paddingTop: 80,
  },
  banner: {
    height: 90,
    width: '100%',
  },
  input: {
    height: 50,
    width: '100%',
    marginTop: 10,
    padding: 4,
    borderRadius: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec33',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  registerButton: {
    height: 50,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
  },
  registerButtonText: {
    fontSize: 18,
    color: '#0007',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 30,
    marginBottom: 40,
  },
  error: {
    color: 'red',
    paddingTop: 10,
  },
  success: {
    color: 'green',
    paddingTop: 10,
  },
  loader: {
    marginTop: 20,
  },
});

export default HomeScreen;

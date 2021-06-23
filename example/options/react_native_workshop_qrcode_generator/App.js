import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

const PATH_TO_LOGO = './assets/icon.png'

export default class App extends Component {
 

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <QRCode value='codemobiles' />
        </View>
        <View style={styles.section}>
          <QRCode
            value='codemobiles'
            size={200}
          />
        </View>
        <View style={styles.section}>
          <QRCode
            value='codemobiles'
            color='blue'
            backgroundColor='yellow'
          />
        </View>
        <View style={styles.section}>
          <QRCode
            value='codemobiles'
            logo={require(PATH_TO_LOGO)}
          />
        </View>
        <View style={styles.section}>
          <QRCode
            value='codemobiles'
            logo={require(PATH_TO_LOGO)}
            logoSize={50}
          />
        </View>
        <View style={styles.section}>
          <QRCode
            value='codemobiles'
            logo={require(PATH_TO_LOGO)}
            logoMargin={10}
          />
        </View>
        <View style={styles.section}>
          <QRCode
            value='codemobiles'
            logo={require(PATH_TO_LOGO)}
            logoBorderRadius={15}
          />
        </View>
           
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 15,
    paddingBottom: 15
  },
  section: {
    marginTop: 15,
    marginBottom: 15
  }
})
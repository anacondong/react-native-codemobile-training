import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  NativeModules,
  Alert,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
    };
  }

  openCamera = async cropIt => {
    let image = await ImagePicker.openCamera({
      cropping: cropIt,
      width: 500, // width after cropped
      height: 500, // height after cropped
      includeExif: true,
    });

    this.setState({
      image: {uri: image.path, width: image.width, height: image.height},
    });
  };

  openPhotoGallery = async cropIt => {
    let image = await ImagePicker.openPicker({
      // width: 300, // width after cropped
      // height: 300, // height after cropped
      cropping: cropIt,
      compressImageMaxWidth: 640, // max width compress if not croppred
      compressImageMaxHeight: 480, // max height compress if not croppred
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    });

    this.setState({
      image: {
        uri: image.path,
        width: image.width,
        height: image.height,
        mime: image.mime,
      },
    });
  };

  showImage = () => {
    return (
      <Image
        source={this.state.image}
        style={{
          flex: 1,
          width: '100%',
          marginBottom: 8,
          borderRadius: 10,
          backgroundColor: '#fff2',
        }}
        resizeMode="center"
      />
    );
  };

  uploadWithAxios = async ()=>{
    const data = new FormData();
    data.append("username", "codemobiles"); // you can append anyone.
    data.append("password", "1234"); // you can append anyone.
    data.append("userfile", {
      uri: this.state.image.uri,
      type: "image/jpeg", // or photo.type
      name: "testPhotoName.jpg"
    });

    let result = await axios.post("http://192.168.0.104:3000/uploads",data);
    Alert.alert(JSON.stringify(result.data));
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/img/bg.png')}
        style={{flex: 1, flexDirection: 'column'}}>
        <Image
          resizeMode="contain"
          source={require('./assets/img/banner_react_qr_camera.png')}
          style={{height: 100, width: '100%'}}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={() => this.openCamera(false)}
            style={styles.button}>
            <Text style={styles.text}>CAMERA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.openCamera(true)}
            style={styles.button}>
            <Text style={styles.text}>CAMERA + CROP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.openPhotoGallery(false)}
            style={styles.button}>
            <Text style={styles.text}>GALLERY</Text>
          </TouchableOpacity>
        </View>

        {/* Show Preview Image */}
        {this.state.image && this.showImage()}

        {/* Show Upload button */}
        {this.state.image && (
          <TouchableOpacity
            onPress={this.uploadWithAxios}
            style={styles.upload_button}>
            <Text style={styles.text}>UPLOAD</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  button: {
    marginBottom: 10,
    height: 40,
    padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  upload_button: {
    borderRadius: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    width: 300,
    height: 50,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  text_upload: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 10,
    color: '#FFFFFF',
  },
});

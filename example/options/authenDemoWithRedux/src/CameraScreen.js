import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  NativeModules,
  Alert
} from "react-native";

var ImagePicker = NativeModules.ImageCropPicker;


export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }


  upload = () => {
    const data = new FormData();
    data.append("username", "codemobiles"); // you can append anyone.
    data.append("password", "1234"); // you can append anyone.
    data.append("userfile", {
      uri: this.state.image.uri,
      type: "image/jpeg", // or photo.type
      name: "testPhotoName.jpg"
    });
    fetch("http://192.168.0.107:3000/uploads", {
      method: "POST",
      body: data
    })
      .then(res => res.json())
      .then(res => {
        Alert.alert(res.result);
      });
  };


  pickSingleWithCamera = (cropIt)=>{
    ImagePicker.openCamera({
      cropping: cropIt,
      width: 500,
      height: 500,      
      includeExif: true
    })
      .then(image => {
        console.log("received image", image);
        this.setState({
          image: { uri: image.path, width: image.width, height: image.height }
        });
      })
      .catch(e => alert(e));
  }

  pickSingle = (cropIt) =>{
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropIt,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      compressImageQuality: 0.5,
      compressVideoPreset: "MediumQuality",
      includeExif: true
    })
      .then(image => {
        console.log("received image", image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime
          }
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  render() {
    return (
      <ImageBackground
        source={require("./assets/img/gradient_bg.png")}
        style={styles.container}>
        <Image
          resizeMode={"contain"}
          style={{ width: "100%", height: 120, marginTop: 10, padding: 0 }}
          source={require("./assets/img/banner_react_qr_camera.png")}
        />

          {this.state.image != null ? (
              <TouchableOpacity
              onPress={this.upload}
              style={styles.upload_button}>
              <Text style={styles.text}>UPLOAD</Text>
            </TouchableOpacity>
          ) : null}
        
          <TouchableOpacity
            onPress={() => this.pickSingleWithCamera(false)}
            style={styles.button}>
            <Text style={styles.text}>CAMERA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.pickSingleWithCamera(true)}
            style={styles.button}>
            <Text style={styles.text}>
              CAMERA + CROP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.pickSingle(false)}
            style={styles.button}>
            <Text style={styles.text}>GALLERY</Text>
          </TouchableOpacity>
         
        {this.state.image != null ? (
          <Image source={this.state.image} style={{flex: 1, width:'100%', marginBottom: 8, backgroundColor: '#fff2'}} resizeMode='center'/>
        ) : null}    
        
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },

  button: {
    marginBottom: 10,
    width: 300,
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent'
  },
  upload_button: {
    borderRadius: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    width: 300,
    height: 50,
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",    
    backgroundColor: "#fa4a4d"
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
    flexDirection:'column',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 10,
    color: '#FFFFFF'
  }
});

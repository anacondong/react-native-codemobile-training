import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList, RootTabParamsList} from './RootNavigationParams';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type CameraScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamsList, 'Success'>,
  BottomTabNavigationProp<RootTabParamsList, 'Json'>
>;

interface CameraScreenProps {
  navigation: CameraScreenNavigationProp;
}

const CameraScreen: React.FunctionComponent<CameraScreenProps> = props => {
  const [image, setImage] = React.useState<any>(null);

  const handleUploadWithAxios = async () => {
    const data = new FormData();
    data.append('username', 'codemobiles'); // you can append anyone.
    data.append('password', '1234'); // you can append anyone.
    data.append('userfile', {
      uri: image.uri,
      type: 'image/jpeg', // or photo.type
      name: 'testPhotoName.jpg',
    });

    let result = await axios.post('http://192.168.2.41.:3000/uploads', data);
    console.log(JSON.stringify(result.data));
    Alert.alert(JSON.stringify(result.data));
  };


  const handleCamera = async (cropIt: boolean) => {
    let _image = await ImagePicker.openCamera({
      cropping: cropIt,
      width: 500, // width after cropped
      height: 500, // height after cropped
      includeExif: true,
    });

    setImage({uri: _image.path, width: _image.width, height: _image.height});
  };

  const handlePhotoGallery = async (cropIt: boolean) => {
    let _image = await ImagePicker.openPicker({
      // width: 300, // width after cropped
      // height: 300, // height after cropped
      cropping: cropIt,
      compressImageMaxWidth: 640, // max width compress if not croppred
      compressImageMaxHeight: 480, // max height compress if not croppred
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    });

    setImage({
      uri: _image.path,
      width: _image.width,
      height: _image.height,
      mime: _image.mime,
    });
  };

  return (
    <ImageBackground
      source={require('./assets/img/bg.png')}
      style={styles.root}>
      <Image
        style={styles.banner}
        resizeMode="contain"
        source={require('./assets/img/banner_react_qr_camera.png')}
      />

      {/* Buttons section */}
      <View style={styles.buttonSection}>
        {/* CAMERA */}
        <TouchableOpacity onPress={() => handleCamera(false)} style={styles.button}>
          <Text style={styles.text}>CAMERA</Text>
        </TouchableOpacity>

        {/* CAMERA  + CROP*/}
        <TouchableOpacity onPress={() => handleCamera(true)} style={styles.button}>
          <Text style={styles.text}>CAMERA+CROP</Text>
        </TouchableOpacity>

        {/* GALLERY*/}
        <TouchableOpacity onPress={() => handlePhotoGallery(true)} style={styles.button}>
          <Text style={styles.text}>GALLERY</Text>
        </TouchableOpacity>
      </View>

      {image && (
        <>
          <Image
            source={image}
            style={styles.previewImage}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => handleUploadWithAxios()} style={styles.upload_button}>
            <Text style={styles.text}>UPLOAD</Text>
          </TouchableOpacity>
        </>
      )}

    </ImageBackground>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  root: {flex: 1, flexDirection: 'column', paddingLeft: 20, paddingRight: 20},
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  banner: {marginLeft: 20, marginRight: 20, height: 100, width: '100%'},
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
  previewImage: {flex: 1, width: '100%', marginBottom: 20},
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upload_button: {
    borderRadius: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    width: 300,
    height: 50,
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
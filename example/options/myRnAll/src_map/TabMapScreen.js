import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,  
  Image,
  Alert,
  Dimensions,
  TouchableOpacity,
  Platform
} from "react-native";
import MapView, {
  Marker
} from "react-native-maps";
import CustomCallout from "./CustomCallout";
import openMap from 'react-native-open-maps';
const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
// 13.6970244,100.5130343 codemobiles office
const LATITUDE = 13.6970244;
const LONGITUDE = 100.5130343;
const LATITUDE_DELTA = 0.0222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;



export default class TabMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapType: 'standard',
      markers: [],
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }

  addMarker(e) {


    this.setState({
      
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,         
        }
      ]
    });
  }

  onClickCallout = (marker)=>{
        // CodeMobiles Location
        // Alert.alert(JSON.stringify(marker.coordinate))                
        const {latitude, longitude} = marker.coordinate
        openMap({ latitude: latitude, longitude: longitude, provider: 'google' });
  }


  render() {
   

    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          mapType={this.state.mapType} // NORMAL, SATELLITE, HYBRID
          onPress={e => this.addMarker(e)}
          initialRegion={this.state.region}>

          {this.state.markers.map(marker=> (
             <Marker
             key={marker.key}
             onCalloutPress={() =>  this.onClickCallout(marker)}
             coordinate={marker.coordinate}
             pinColor={marker.color}>
              <Image
              source={require("./assets/img/cmdev_icon.png")}
              style={{ height: 32, width: 32 }}
            /> 

              {/** tooltip is to hide/show default frame or custom */}
              <MapView.Callout tooltip style={styles.customView}>
                <CustomCallout>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start"
                    }}>

                    {/** Showing image in android is not possible now (Lib. Bug) */}
                    {Platform.OS == 'ios' ? (                    
                    <Image
                      resizeMode="cover"
                      source={require("./assets/img/cmdev_icon.png")}
                      style={{ height: 20, width: 20, marginRight: 8 }}/>) : null}

                    <Text>
                      {parseFloat(marker.coordinate.latitude).toFixed(2)} °,{" "}
                      {parseFloat(marker.coordinate.longitude).toFixed(2)} °
                    </Text>
                  </TouchableOpacity>
                </CustomCallout>
              </MapView.Callout>

           </Marker>
           ))}
         
        </MapView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    height: "100%",
    width: "100%"
  },
  banner: {
    height: 80,
    width: "100%"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  customView: {
    width: 140,
    height: 100
  }
});

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform
} from "react-native";

// https://github.com/react-community/react-native-maps/blob/master/docs/mapview.md
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";
const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

import SegmentedControlTab from "react-native-segmented-control-tab";

export default class TabGPSScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapType: "standard",
      selectedIndex: 0,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE
      })
    };
  }

  

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;        
        this.state.coordinate.timing(position.coords).start();
        this.setState({latitude, longitude});
      },
      error => {
        //console.log(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 500,
        maximumAge: 500
      }
    );
  }
  // Move to this region
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  changeMapType = index => {
    this.setState({ selectedIndex: index });
    console.log(index);
    if (index == 0) {
      this.setState({ mapType: "standard" });
    } else if (index == 1) {
      this.setState({ mapType: "satellite" });
    } else {
      this.setState({ mapType: "hybrid" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          mapType={this.state.mapType}
          style={styles.map}
          showUserLocation
          followUserLocation
          showsMyLocationButton
          loadingEnabled
          region={this.getMapRegion()}>
          <Marker.Animated coordinate={this.state.coordinate} >
            <Image
              source={require("./assets/img/cmdev_icon.png")}
              style={{ height: 32, width: 32 }}
            />
          </Marker.Animated>
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.latitude).toFixed(3)},
              {parseFloat(this.state.longitude).toFixed(3)} °
            </Text>
          </TouchableOpacity>
        </View>
        <SegmentedControlTab
          values={["Standard", "Sattile", "Hybrid"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={index => this.changeMapType(index)}
        />
        <Image
          resizeMode="contain"
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "#000000",
            marginTop: 10
          }}
          source={require("./assets/img/banner_react_map.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  }
});

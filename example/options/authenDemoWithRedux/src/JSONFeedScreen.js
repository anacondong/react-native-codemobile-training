import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  AsyncStorage,
  Alert,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { feedData } from './actions/jsonfeed.action'

import axios from "axios";
import { Card } from "react-native-elements";

class JSONFeedScreen extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    // isFetching: false,
    // username: "",
    // password: "",
    // youtubes: []
    // };
  }

  componentDidMount() {
    // axios.get('http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods').then(response=>{
    //   alert(JSON.stringify(response.data))
    // })

    this.props.feedData();
  }

  /*
  feedData = async () => {
    this.setState({ isFetching: true });
    let url = "http://codemobiles.com/adhoc/youtubes/index_new.php";
    let regUsername = await AsyncStorage.getItem("username");
    let regPassword = await AsyncStorage.getItem("password");

    let params = `username=${regUsername}&password=${regPassword}&type=foods`;
    axios
      .post(url, params, {
        headers: { "content-type": "application/x-www-form-urlencoded" }
      })
      .then(response => {
        // alert(JSON.stringify(response.data))
        this.setState({ youtubes: response.data.youtubes, isFetching: false });
      });
  };
  */

  listItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        setOpacityTo={50}
        onPress={() => {
          this.props.navigation.navigate("Youtube", { item });
        }}
      >
        <Card containerStyle={styles.listCard}>
          <View style={styles.listCardView}>
            <Image
              source={{ uri: item.avatar_image }}
              style={styles.listAvatar}
            />
            <View style={styles.listTitleSubtitleContainer}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listSubTitle}>{item.subtitle}</Text>
            </View>
          </View>

          <Image
            style={styles.listYoutbeImage}
            source={{ uri: item.youtube_image }}
          />
        </Card>
      </TouchableOpacity>
    );
  };

  listheader() {
    return (
      <View style={{flexDirection:'column'}}>
        <Text>{this.props.homeReducer.username}</Text>
        <Image
          source={require("./assets/img/header_react_native.png")}
          style={styles.list_header}
          resizeMode="contain"
        />
      </View>
    );
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./assets/img/bg.png")}
      >
        <FlatList
          onRefresh={this.props.feedData}
          refreshing={this.props.jsonFeedReducer.isFetching}
          data={this.props.jsonFeedReducer.youtubes}
          renderItem={this.listItem}
          ListHeaderComponent={this.listheader()}
          keyExtractor={(item, index) => " " + Math.random()}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list_header: {
    width: "100%",
    height: 100
  },
  listCard: {
    overflow: "hidden",
    flexDirection: "column",
    marginBottom: 20,
    borderRadius: 20,
    padding: 0
  },
  listCardView: {
    flexDirection: "row",
    marginBottom: 16,
    height: 45,
    alignItems: "center"
  },
  listAvatar: {
    width: 45,
    height: "100%",
    marginRight: 16
  },
  listTitleSubtitleContainer: {
    flexDirection: "column",
    marginRight: 16,
    flex: 1
  },
  listTitle: {
    fontWeight: "700"
  },
  listSubTitle: {
    fontWeight: "100"
  },
  listYoutbeImage: {
    width: "100%",
    height: 190
  }
});

const mapStateToProps = state => ({
  homeReducer: state.homeReducer,
  jsonFeedReducer: state.jsonFeedReducer
});

const mapDispatchToProps = { feedData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JSONFeedScreen);

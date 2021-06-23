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
import { Card } from "react-native-elements";

import axios from "axios";
import { YoutubeBean, YoutubeItemBean } from "./models/YoutubeBean";

export default class JSONFeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      username: "",
      password: "",
      youtubes: []
    };
  }

  async componentDidMount() {
    const _regUsername = await AsyncStorage.getItem("username");
    const _regPassword = await AsyncStorage.getItem("password");
    this.setState({ username: _regUsername, password: _regPassword });

    this.feedData();
  }

  feedData = () => {
    this.setState({ isFetching: true });
    this.setState({ youtubes: [] });

    // http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods
    const url = "http://codemobiles.com/adhoc/youtubes/index_new.php";
    const { username, password } = this.state;
    const data = { username: username, password: password, type: "foods" };

    // Http get
    // axios.get(url, { params: data })
    //   .then(response => {
    //     this.setState({ youtubes: response.data.youtubes, isFetching: false });
    //   })
    //   .catch(error => {});
    // };

    // Http post
    axios
      .post(url, `username=${username}&password=${password}&type=foods`, {
        headers: { "content-type": "application/x-www-form-urlencoded" }})
      .then(response => {        
        this.setState({ youtubes: response.data.youtubes, isFetching: false });
      })
      .catch(error => {
        Alert.alert(JSON.stringify(error));
      });
  };

  onClickItem = item => {
    //Alert.alert(JSON.stringify(item));
    this.props.navigation.push("YoutubePlayer", { youtubeItem: item });
  };

  renderListItem = item => {
    const youtube = new YoutubeItemBean(item);
    return (
      <TouchableOpacity
        setOpacityTo={50}
        onPress={() => this.onClickItem(item)}
      >
        <Card containerStyle={styles.listCard}>
          <View style={styles.listCardView}>
            <Image
              source={{ uri: youtube.avatar_image }}
              style={styles.listAvatar}
            />
            <View style={styles.listTitleSubtitleContainer}>
              <Text style={styles.listTitle}>{youtube.title}</Text>
              <Text style={styles.listSubTitle}>{youtube.subtitle}</Text>
            </View>
          </View>
          <Image
            source={{ uri: youtube.youtube_image }}
            style={styles.listYoutbeImage}
          />
        </Card>
      </TouchableOpacity>
    );
  };

  renderHeader = () => {
    return (
      <Image
        resizeMode="contain"
        style={{ width: "100%", height: 100, marginTop: 30, marginBottom: 40 }}
        source={require("./../assets/img/header_react_native.png")}
      />
    );
  };

  render() {
    /*
    let dummyData = [
      {
        id: "E3u2YoGWZ9k",
        title: "Laura in the Kitchen",
        subtitle: "Homemade Sicilian Pizza Recipe ",
        avatar_image: "https://yt3.ggpht.com/-kTsKONJu72w/AAAAAAAAAAI/AAAAAAAAAAA/U2wrC4qn3Kw/s100-c-k-no/photo.jpg",
        youtube_image: "http://img.youtube.com/vi/E3u2YoGWZ9k/maxresdefault.jpg"
      },
      {
        id: "F5MqYWrHxYs",
        title: "Scoff",
        subtitle: "Bubble & Squeak | Good Food Good Times",
        avatar_image: "https://yt3.ggpht.com/-KfmDZEJ0lyo/AAAAAAAAAAI/AAAAAAAAAAA/9FPAFvPqhWw/s100-c-k-no/photo.jpg",
        youtube_image: "http://img.youtube.com/vi/F5MqYWrHxYs/maxresdefault.jpg"
      }];
      */

    return (
      <ImageBackground
        source={require("./../assets/img/gradient_bg.png")}
        style={styles.container}
      >
      {/** By passing extraData={this.state} to FlatList we make sure FlatList itself will 
           re-render when the state.selected changes. Without setting this prop, 
           FlatList would not know it needs to re-render any items  */}
        <FlatList
          onRefresh={() => this.feedData()}
          refreshing={this.state.isFetching}
          extraData={this.state}
          ListHeaderComponent={this.renderHeader()}
          data={this.state.youtubes}
          renderItem={({ item }) => this.renderListItem(item)}
          keyExtractor={(item, index) => item.id}
        />
      </ImageBackground>
    );
  }
}

JSONFeedScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "JSONFeed",
    headerStyle: {
      backgroundColor: "#f00"
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" },
    headerBackTitle: " "
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    flexDirection: "column"
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

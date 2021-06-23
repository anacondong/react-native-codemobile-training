import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


export default class JSONFeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      youtubes: []
    };
  }

  componentDidMount(){
    this.loadData()
  }

  loadData = async ()=>{
    this.setState({isFetching: true, youtubes: []})

    let url = 'http://codemobiles.com/adhoc/youtubes/index_new.php'
    let regUsername = await AsyncStorage.getItem('username')
    let regPassword = await AsyncStorage.getItem('password')
    let data = `username=${regUsername}&password=${regPassword}&type=foods`

    let response = await axios.post(url, data)
    this.setState({isFetching: false, youtubes: response.data.youtubes})
  }

  renderRow = ({index, item}) => {
    return (
     <TouchableOpacity onPress={()=>this.props.navigation.navigate("youtube", {item})}>
       <View style={styles.listCard}>
         {/* Top section */}
        <View style={styles.listCardView}>
          {/* Avatar */}
          <Image style={styles.listAvatar} resizeMode="cover" source={{uri: item.avatar_image}} />

          {/* Title and subtitle section */}
          <View style={styles.listTitleSubtitleContainer}>
             <Text numberOfLines={1} style={styles.listTitle}>{item.title}</Text>
             <Text numberOfLines={1} style={styles.listSubTitle}>{item.subtitle}</Text>
          </View>
        </View>

          {/* Bottom section */}        
          <Image style={styles.listYoutbeImage} resizeMode="cover"  source={{uri: item.youtube_image}} />
       </View>
     </TouchableOpacity>
    );
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('./assets/img/bg.png')}>
        <FlatList
          onRefresh={() => this.loadData()}
          refreshing={this.state.isFetching} 
          style={styles.flatList}
          data={this.state.youtubes}
          renderItem={this.renderRow}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
  },
});

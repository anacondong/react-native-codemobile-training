/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import axios from 'axios';
import {Youtube, YoutubeData, YoutubeResult} from './types/youtube.interface';
import {
  YouTubeStandaloneAndroid,
  YouTubeStandaloneIOS,
} from 'react-native-youtube';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList, RootTabParamsList} from './RootNavigationParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type JSONFeedScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<RootStackParamsList, 'Success'>,
  BottomTabNavigationProp<RootTabParamsList, 'Json'>
>;

interface JSONFeedScreenProps {}
const JSONFeedScreen: React.FunctionComponent<JSONFeedScreenProps> = props => {
  const navigation = useNavigation<JSONFeedScreenNavigationProps>();
  const route = useRoute<RouteProp<RootStackParamsList, 'Success'>>();
  const [dataArray, setDataArray] = React.useState<Youtube[]>([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  React.useEffect(()=> {
    // component Created >> didmount
    console.log('Json created');
    loadData();

    // // component Destroy >> didunmount
    // return () =>{
    //   console.log('Json Destroy');
    // }
  },[])

  const loadData = async () => {
    setIsRefreshing(true);
    let url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
    let regUsername = 'admin'; // await AsyncStorage.getItem('username')
    let regPassword = 'password'; // await AsyncStorage.getItem('password')
    let data = `username=${regUsername}&password=${regPassword}&type=foods`;
    let result = await axios.post<YoutubeResult>(url, data);
    setDataArray(result.data.youtubes);
    setIsRefreshing(false);
  };

  const renderRow = (item: Youtube) => {

    return (
      <TouchableOpacity 
      onPress={()=> Alert.alert('Open Youtube')}
      // onPress={async () => {
      //   Platform.OS === 'android'
      //     ? await YouTubeStandaloneAndroid.playVideo({
      //         apiKey: 'YOUR_API_KEY', // Your YouTube Developer API Key
      //         videoId: item.id, // YouTube video ID
      //         autoplay: true, // Autoplay the video
      //         startTime: 120, // Starting point of video (in seconds)
      //       })
      //     : await YouTubeStandaloneIOS.playVideo(item.id);
      // }}
      style={styles.listCard}>
        {/* Avatar and Title  */}
        <View style={styles.listCardView}>
          {/* Avatar  */}
          <Image style={styles.listAvatar} source={{uri:item.avatar_image}} />
          {/* Title and Subtitle  */}
          <View style={styles.listTitleSubtitleContainer}>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Text style={styles.listSubTitle}>{item.subtitle}</Text>
          </View>
        </View>

        <Image style={styles.listYoutbeImage}
        source={{uri: item.youtube_image}}
        />
      </TouchableOpacity>
    )
  }

  const renderHeader = () => (
    <Image
      source={require('./assets/img/header_react_native.png')}
      resizeMode="contain"
      style={{height: 100, width: '100%'}}
    />
  );


  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      {/* pass by route  */}
      {/* <Text>{route.params?.username}</Text> */}
      <FlatList
        // loading       
        refreshing={isRefreshing}
        onRefresh={loadData}
        // for header
        ListHeaderComponent={renderHeader}
        data={dataArray}
        renderItem={obj => renderRow(obj.item)}
        keyExtractor={item => item.id}
      />
    </ImageBackground>
  );
};

export default JSONFeedScreen;

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
    backgroundColor: '#FFF',
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

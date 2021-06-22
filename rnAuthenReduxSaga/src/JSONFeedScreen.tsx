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
import {Youtube, YoutubeResult} from './types/youtube.interface';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList, RootTabParamsList} from './RootNavigationParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { JsonfeedSelector } from './reducers/jsonfeed.reducer';
import { ACTIVITY_ADD, JSON_REQUEST } from './Constants';


type JSONFeedScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<RootStackParamsList, 'Success'>,
  BottomTabNavigationProp<RootTabParamsList, 'Json'>
>;

interface JSONFeedScreenProps {}
const JSONFeedScreen: React.FunctionComponent<JSONFeedScreenProps> = props => {
  const navigation = useNavigation<JSONFeedScreenNavigationProps>();
  const route = useRoute<RouteProp<RootStackParamsList, 'Success'>>();
  const jsonfeedReducer = useSelector(JsonfeedSelector);
  const dummyImg = [
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/204156627_192665129325543_2208976459849398308_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SZC7cGhTRskAX_UMmLX&edm=AP_V10EBAAAA&ccb=7-4&oh=03e76db13604fba9c9fe8e1c540a9541&oe=60D6FB83&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/204156627_192665129325543_2208976459849398308_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SZC7cGhTRskAX_UMmLX&tn=4vmDtnBx_gQ7SdgC&edm=AP_V10EBAAAA&ccb=7-4&oh=698408233d4370d48046c5321ab4ccb0&oe=60D7CAC3&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/202906614_507273933828335_4299794882139326376_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=fnuoRQ_ttM0AX9Ul3Q4&edm=AP_V10EBAAAA&ccb=7-4&oh=8914cd98e54f1679da28331e63025b94&oe=60D75743&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/189924339_140356644708096_8438800571872591744_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Nyc6vBmz_n4AX-LBRno&edm=AP_V10EBAAAA&ccb=7-4&oh=b421da5e1288b90f9eb14a520ab2599a&oe=60D7D581&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/189924339_140356644708096_8438800571872591744_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Nyc6vBmz_n4AX-LBRno&edm=AP_V10EBAAAA&ccb=7-4&oh=ba8a844c302a230373bea7347a2ce37c&oe=60D63EFF&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/179926716_302741111386146_5094901101625970421_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=nYBG5kzGs8sAX91Y0e5&edm=AP_V10EBAAAA&ccb=7-4&oh=4e053364ed6907d362b039ba21dbd164&oe=60D6321C&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/179926716_302741111386146_5094901101625970421_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=nYBG5kzGs8sAX91Y0e5&edm=AP_V10EBAAAA&ccb=7-4&oh=a625f5c0dc2c68260ba1b6615a2318df&oe=60D7A29C&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/204156627_192665129325543_2208976459849398308_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SZC7cGhTRskAX_UMmLX&edm=AP_V10EBAAAA&ccb=7-4&oh=03e76db13604fba9c9fe8e1c540a9541&oe=60D6FB83&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/204156627_192665129325543_2208976459849398308_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SZC7cGhTRskAX_UMmLX&tn=4vmDtnBx_gQ7SdgC&edm=AP_V10EBAAAA&ccb=7-4&oh=698408233d4370d48046c5321ab4ccb0&oe=60D7CAC3&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/202906614_507273933828335_4299794882139326376_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=fnuoRQ_ttM0AX9Ul3Q4&edm=AP_V10EBAAAA&ccb=7-4&oh=8914cd98e54f1679da28331e63025b94&oe=60D75743&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/189924339_140356644708096_8438800571872591744_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Nyc6vBmz_n4AX-LBRno&edm=AP_V10EBAAAA&ccb=7-4&oh=b421da5e1288b90f9eb14a520ab2599a&oe=60D7D581&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/189924339_140356644708096_8438800571872591744_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Nyc6vBmz_n4AX-LBRno&edm=AP_V10EBAAAA&ccb=7-4&oh=ba8a844c302a230373bea7347a2ce37c&oe=60D63EFF&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/179926716_302741111386146_5094901101625970421_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=nYBG5kzGs8sAX91Y0e5&edm=AP_V10EBAAAA&ccb=7-4&oh=4e053364ed6907d362b039ba21dbd164&oe=60D6321C&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/179926716_302741111386146_5094901101625970421_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=nYBG5kzGs8sAX91Y0e5&edm=AP_V10EBAAAA&ccb=7-4&oh=a625f5c0dc2c68260ba1b6615a2318df&oe=60D7A29C&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/204156627_192665129325543_2208976459849398308_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SZC7cGhTRskAX_UMmLX&edm=AP_V10EBAAAA&ccb=7-4&oh=03e76db13604fba9c9fe8e1c540a9541&oe=60D6FB83&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/204156627_192665129325543_2208976459849398308_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SZC7cGhTRskAX_UMmLX&tn=4vmDtnBx_gQ7SdgC&edm=AP_V10EBAAAA&ccb=7-4&oh=698408233d4370d48046c5321ab4ccb0&oe=60D7CAC3&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/202906614_507273933828335_4299794882139326376_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=fnuoRQ_ttM0AX9Ul3Q4&edm=AP_V10EBAAAA&ccb=7-4&oh=8914cd98e54f1679da28331e63025b94&oe=60D75743&_nc_sid=4f375e',
    },
    {
      url: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/189924339_140356644708096_8438800571872591744_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Nyc6vBmz_n4AX-LBRno&edm=AP_V10EBAAAA&ccb=7-4&oh=b421da5e1288b90f9eb14a520ab2599a&oe=60D7D581&_nc_sid=4f375e',
    },
  ];

  const dispatch = useDispatch();

  React.useEffect(() => {
    // component Created >> didmount
    console.log('Json created');
    dispatch({type: JSON_REQUEST}); // call to action then Saga Watcher will get it
  }, []);


  const renderRow = (item: Youtube, index: any) => {
    
    return (
      <TouchableOpacity
        onPress={() => Alert.alert('Open Youtube')}

        style={styles.listCard}>
        {/* Avatar and Title  */}
        <View style={styles.listCardView}>
          {/* Avatar  */}
          <TouchableOpacity onPress={() => dispatch({type: ACTIVITY_ADD, payload : item.title})}>
            <Image
              style={styles.listAvatar}
              source={{uri: dummyImg[index].url}}
            />
          </TouchableOpacity>
          {/* Title and Subtitle  */}
          <View style={styles.listTitleSubtitleContainer}>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Text style={styles.listSubTitle}>{item.subtitle}</Text>
          </View>
        </View>

        <Image
          style={styles.listYoutbeImage}
          source={{uri: dummyImg[index].url}}
        />
      </TouchableOpacity>
    );
  };

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
        refreshing={jsonfeedReducer.isFetching}
        onRefresh={() => dispatch({type: JSON_REQUEST})}
        // for header
        ListHeaderComponent={renderHeader}
        data={jsonfeedReducer.result}
          renderItem={obj => renderRow(obj.item, obj.index)} // pass array Object
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

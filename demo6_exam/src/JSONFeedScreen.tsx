/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Youtube } from './types/youtube.interface';
import { useDispatch, useSelector } from 'react-redux';
import { JsonfeedSelector } from './reducers/jsonfeed.reducer';
import { ACTIVITY_ADD, JSON_REQUEST } from './Constants';

interface JSONFeedScreenProps { }
const JSONFeedScreen: React.FunctionComponent<JSONFeedScreenProps> = props => {
  const jsonfeedReducer = useSelector(JsonfeedSelector);

  const dispatch = useDispatch();

  React.useEffect(() => {
    // component Created >> didmount
    console.log('Json created');
    dispatch({ type: JSON_REQUEST }); // call to action then Saga Watcher will get it
  }, []);


  const renderRow = (item: Youtube, index: any) => {

    return (
      <TouchableOpacity
        onPress={() => Alert.alert('Open Youtube')}

        style={styles.listCard}>
        {/* Avatar and Title  */}
        <View style={styles.listCardView}>
          {/* Avatar  */}
          <TouchableOpacity onPress={() => dispatch({ type: ACTIVITY_ADD, payload: item.title })}>
            <Image
              style={styles.listAvatar}
              source={require('./assets/img/youtubepic.jpg')}
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
          source={require('./assets/img/youtubepic.jpg')}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      {/* pass by route  */}
      {/* <Text>{route.params?.username}</Text> */}
      <FlatList
        // loading new feed
        refreshing={jsonfeedReducer.isFetching}
        onRefresh={() => dispatch({ type: JSON_REQUEST })}
        // for header  ListHeaderComponent={renderHeader}
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

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {feed} from './../actions/home.action';
import Footer from "./Footer"


class Home extends Component {
 
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Button
          title={'Load (' + this.props.footerReducer.count + ')'}
          onPress={this.props.feed}
        />

        {/* Content */}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {this.props.homeReducer.result &&
            this.props.homeReducer.result.map(item => (
              <Text key={item}>{item}</Text>
            ))}

          {this.props.homeReducer.isFetching && <Text>Loading...</Text>}
        </View>
          <Footer
            style={{
              backgroundColor: 'red',
              color: 'white',
              textAlign: 'center',
              height: 40,
              textAlignVertical: 'center',
            }}
          />
        
      </View>
    );
  }
}

const mapStateToProps = ({homeReducer, footerReducer}) => ({
    homeReducer, footerReducer
})

const mapDispatchToProps = {
    feed
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
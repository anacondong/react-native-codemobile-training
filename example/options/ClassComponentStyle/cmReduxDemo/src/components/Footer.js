import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {updateCount} from './../actions/footer.action'
import {reset} from './../actions/home.action'
import { connect } from 'react-redux'

class Footer extends Component {
 

  render() {
    return (
        <View>
      
          <TouchableOpacity onPress={()=>{
            this.props.updateCount()
            this.props.reset()
            }}  style={this.props.style}>
            <Text style={this.props.style}> Clear ({this.props.footerReducer.count}) </Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}


const mapStateToProps = ({footerReducer}) => ({
  footerReducer
})

const mapDispatchToProps = {
  updateCount, reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

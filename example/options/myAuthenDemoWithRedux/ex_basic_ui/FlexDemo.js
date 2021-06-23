import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <View style={{height: 50, width: 50, backgroundColor: 'red'}}/>
                <View style={{height: 50, width: 50, backgroundColor: 'green', alignSelf:'center'}}/>
                <View style={{height: 50, width: 50, backgroundColor: 'blue'}}/>
            </View>
        );
    }
}

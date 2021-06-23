import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class ImageDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{...styles.box, backgroundColor: 'red'}} />
                <View style={{...styles.box, backgroundColor: 'green', alignSelf: 'center' }} />
                <View style={{...styles.box, backgroundColor: 'blue' }} />
                <Image style={styles.logo} 
                    source={require('./../assets/img/avatar.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'flex-start' 
    },
    box: { 
        height: 50, 
        width: 50,        
    },
    logo: {
        width: 100, 
        height: 100, 
        position:'absolute',
        left: (Dimensions.get('window').width / 2) - 50,
        top: (Dimensions.get('window').height / 2) - 50,
    }
});

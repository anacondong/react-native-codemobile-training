import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';


class IconEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 40, height: 40 }}
                    source={this.props.icon} />
                <TextInput
                    maxLength={30}
                    placeholder={this.props.placeholder} />
            </View>
        );
    }
}



export default class PropsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <IconEntry
                    icon={require('./../assets/img/ic_username.png')}
                    placeholder="Username" />

                <IconEntry
                    icon={require('./../assets/img/ic_password.png')}
                    placeholder="Password" />
            </View>
        );
    }
}

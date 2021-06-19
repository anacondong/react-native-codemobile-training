import React from 'react'
import { View,Text } from 'react-native'

interface HomeScreenProps {
    
}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
    return (
        <View style={{backgroundColor:'red',flex:1}}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

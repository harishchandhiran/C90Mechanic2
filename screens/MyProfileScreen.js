import * as React from 'react';
import { View } from 'react-native';
import { Header } from "react-native-elements";

export default class MyProfileScreen extends React.Component {
    render(){
        return (
            <View>
                <Header 
                    backgroundColor="orange" 
                    centerComponent={{text: 'My Profile'}} />
            </View>
        )
    }
}
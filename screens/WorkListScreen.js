import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from "react-native-elements";

export default class WorkListScreen extends React.Component {
    render(){
        return (
            <View>
                <Header 
                    backgroundColor="orange" 
                    centerComponent={{text: 'Work List'}} />
            </View>
        )
    }
}
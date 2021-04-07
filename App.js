import * as React from 'react'
import { View,Text } from "react-native";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import FinishedWorksScreen from './screens/FinishedWorksScreen'

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>      
    )
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  //Drawer: {screen: AppDrawerNavigator}
  FinishedWorksScreen: {screen: FinishedWorksScreen}
})
const AppContainer = createAppContainer(switchNavigator);
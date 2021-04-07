import * as React from 'react'
import { createDrawerNavigator } from "react-navigation-drawer"
import CustomSideBarMenu from "./CustomSideBarMenu"
import FinishedWorkScreen from '../screens/FinishedWorksScreen'
import MyProfileScreen from '../screens/MyProfileScreen'
import WorkListScreen from '../screens/WorkListScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    WorkListScreen: {
        screen: WorkListScreen
    },
    MyProfileScreen: {
        screen: MyProfileScreen
    },
    FinishedWorkScreen: {
        screen: FinishedWorkScreen
    }
},
{
    contentComponent : CustomSideBarMenu
},
{
    initialRouteName : 'WorkListScreen'
})
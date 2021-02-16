import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'

export const AppSwitchNavigator =createSwitchNavigator({
  Welcome:{screen:Welcome},
  Home:{screen:Home}
})
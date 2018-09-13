import React from 'react'
import { createStackNavigator } from 'react-navigation'

//components
import Home from '../components/home'

const MainRoute = createStackNavigator({
  Home:{
    screen:Home
  }
}, {
  headerVisible: false,
  header: null,
  headerMode: 'none'
})

export default MainRoute
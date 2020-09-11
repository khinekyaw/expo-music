import React, { Component } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

import MusicDetailsScreen from "./screens/MusicDetailsScreen"
import MusicListScreen from "./screens/MusicListScreen"
import SearchScreen from "./screens/SearchScreen"
// Special
import StickyMusicPlayerView from "./containers/StickyMusicPlayerView"

const MainTab = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()

const Home = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='MusicList' component={MusicListScreen} />
    <HomeStack.Screen name='MusicDetails' component={MusicDetailsScreen} />
  </HomeStack.Navigator>
)

// Just for top navigation bar.
const Search = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name='SearchScreen' component={SearchScreen} />
  </SearchStack.Navigator>
)

export default class ExpoMusicApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainTab.Navigator>
          <MainTab.Screen name='Home' component={Home} />
          <MainTab.Screen name='Search' component={Search} />
        </MainTab.Navigator>
        {/* Non-Nav */}
        <StickyMusicPlayerView />
      </NavigationContainer>
    )
  }
}

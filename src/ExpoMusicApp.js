import React, { Component } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { loadAsync } from "expo-font"

import LoadingScreen from "./screens/LoadingScreen"
import MusicDetailsScreen from "./screens/MusicDetailsScreen"
import MusicListScreen from "./screens/MusicListScreen"
import SearchScreen from "./screens/SearchScreen"
// Special
import StickyMusicPlayerView from "./containers/StickyMusicPlayerView"
// Options
import { screenOptions, tabBarOptions } from "./ui/main_tabbar"

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
  constructor(props) {
    super(props)
    this.state = { isReady: false }
    this._loadFontsAsync()
  }

  _loadFontsAsync = async () => {
    await loadAsync({
      PTSans: require("../assets/fonts/PTSans-Regular.ttf"),
      "PTSans-Bold": require("../assets/fonts/PTSans-Bold.ttf")
    })
    this.setState({ isReady: true })
  }

  render() {
    return this.state.isReady ? (
      <NavigationContainer>
        <MainTab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={tabBarOptions}>
          <MainTab.Screen name='Home' component={Home} />
          <MainTab.Screen name='Search' component={Search} />
          <MainTab.Screen name='Book' component={Search} />
        </MainTab.Navigator>
        {/* Non-Nav */}
        <StickyMusicPlayerView />
      </NavigationContainer>
    ) : (
      <LoadingScreen />
    )
  }
}

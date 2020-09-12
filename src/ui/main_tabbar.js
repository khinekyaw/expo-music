import React from "react"
import Ionicons from "react-native-vector-icons/Ionicons"

import { colors } from "./colors"
import sizes from "./sizes"

export const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName
    if (route.name === "Home") {
      iconName = "ios-home"
    } else if (route.name === "Search") {
      iconName = "ios-search"
    } else if (route.name === "Book") {
      iconName = "ios-bookmark"
    }
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={26} color={color} />
  }
})

export const tabBarOptions = {
  activeTintColor: colors.light,
  inactiveTintColor: "gray",
  showLabel: false,
  style: {
    height: sizes.tabbar_height,
    backgroundColor: colors.dark_background
  }
}

import React from "react"
import { View, Text } from "react-native"

import MusicListView from "../containers/MusicListView"
import styles from "./styles"
import { colors } from "../ui/colors"

export default class MusicListScreen extends React.Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: "Home",
      headerTintColor: colors.secondary_dark,
      headerTitleStyle: {
        fontFamily: "PTSans"
      }
    })
  }

  render() {
    return (
      <View>
        <MusicListView />
      </View>
    )
  }
}

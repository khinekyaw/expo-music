import React from "react"
import { View, Text } from "react-native"

import MusicListView from "../containers/MusicListView"
import styles from "./styles"

export default class MusicListScreen extends React.Component {
  render() {
    return (
      <View>
        <MusicListView />
      </View>
    )
  }
}

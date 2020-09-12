import React from "react"
import * as Font from "expo-font"
import { View, Text, TouchableOpacity } from "react-native"

import styles from "./styles"
import { loadAsync } from "expo-font"

export default class SearchScreen extends React.Component {
  state = {
    isReady: false
  }
  loadFontsAsync = async () => {
    await loadAsync({
      Kufam: require("../../assets/fonts/Kufam-Regular.ttf")
    })
    this.setState({ isReady: true })
  }

  componentWillMount() {
    this.loadFontsAsync()
  }

  render() {
    return this.state.isReady ? (
      <View style={styles.container}>
        <Text style={{ fontSize: 22, fontFamily: "Kufam" }}>Search Screen</Text>
      </View>
    ) : null
  }
}

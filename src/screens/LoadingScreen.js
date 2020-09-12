import React from "react"
import { View, Text } from "react-native"

import styles from "./styles"

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 22 }}>Loading</Text>
      </View>
    )
  }
}

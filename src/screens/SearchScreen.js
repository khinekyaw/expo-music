import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import styles from "./styles"
import CustomText from "../components/CustomText"

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomText style={{ fontSize: 22 }}>Search Screen</CustomText>
      </View>
    )
  }
}

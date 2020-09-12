import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

const MusicSectionHeader = props => (
  <View style={styles.container}>
    <Text style={styles.header}>{props.section.title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderColor: colors.gray_border,
    borderBottomWidth: 1,
    justifyContent: "center",
    flex: 1,
    marginTop: 20,
    paddingStart: 15,
    paddingVertical: 12
  },
  header: {
    fontSize: 20
  }
})

export default MusicSectionHeader

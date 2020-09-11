import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

export default MusicDetailsHeader = props => (
  <View style={styles.header}>
    <View style={styles.headerCol1}>
      <Text style={[styles.text, styles.artist]}>{props.artist}</Text>
      <Text style={[styles.text, styles.title]}>{props.title}</Text>
    </View>
    <TouchableOpacity style={styles.chevronIcon} onPress={props.changeView}>
      <Entypo
        name={`chevron-thin-down`}
        size={sizes.chevron_down}
        color={colors.light}
      />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  artist: {
    color: colors.secondary_text,
    fontSize: 15
  },
  chevronIcon: {
    paddingTop: 10,
    paddingEnd: 20
  },
  header: {
    backgroundColor: colors.dark_transparent,
    flexDirection: "row"
  },
  headerCol1: {
    flex: 1,
    paddingStart: 20,
    paddingTop: 10
  },
  text: {
    color: colors.light
  },
  title: {
    marginTop: -5,
    fontSize: 20
  }
})

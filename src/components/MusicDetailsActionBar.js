import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

export default MusicDetailsActionBar = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.heart} onPress={null}>
      <Ionicons
        name={"ios-heart"}
        size={sizes.small}
        color={colors.light_transparent}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.share} onPress={null}>
      <Entypo
        name={"share"}
        size={sizes.small}
        color={colors.light_transparent}
      />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.dark_transparent,
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 20
  },
  heart: {
    marginEnd: 50
  },
  share: {}
})

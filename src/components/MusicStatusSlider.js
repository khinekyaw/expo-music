import React from "react"
import { Text, View, StyleSheet } from "react-native"
import Slider from "@react-native-community/slider"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

export default MusicStatusSlider = () => (
  <View style={styles.container}>
    <Slider
      style={styles.slider}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor='#FFFFFFB0'
      maximumTrackTintColor='#FFFFFF80'
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.dark_transparent,
    height: 30,
    justifyContent: "center"
  },
  slider: {
    width: sizes.slider_width,
    height: 33
  }
})

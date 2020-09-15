import React from "react"
import { Text, View, StyleSheet } from "react-native"
import Slider from "@react-native-community/slider"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

export default class MusicStatusSlider extends React.Component {
  componentDidMount() {}

  formatTime = millis => {
    if (!millis) return "00:00"
    const numerator = millis / 1000
    const denominator = 60
    const minutes = Math.floor(numerator / denominator).toString()
    const secounds = Math.floor(numerator % denominator).toString()
    var zero = "0"
    return `${zero.repeat(2 - minutes.length)}${minutes}:${zero.repeat(
      2 - secounds.length
    )}${secounds}`
  }

  render() {
    const { musicStatus } = this.props
    const percent = musicStatus.positionMillis / musicStatus.durationMillis

    return (
      <View style={styles.container}>
        <View style={styles.sliderRow}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={percent || 0}
            thumbTintColor={colors.light}
            minimumTrackTintColor={colors.light_transparent}
            maximumTrackTintColor='#ffffff60'
            onValueChange={value =>
              this.props.setPosition(value * musicStatus.durationMillis)
            }
          />
        </View>
        <View style={styles.indicator}>
          <Text style={[styles.text, styles.left]}>
            {this.formatTime(musicStatus.positionMillis)}
          </Text>
          <Text style={[styles.text, styles.right]}>
            {this.formatTime(musicStatus.durationMillis)}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.dark_transparent,
    height: 46,
    justifyContent: "center"
  },
  indicator: {
    flex: 1,
    flexDirection: "row"
  },
  slider: {
    width: sizes.slider_width,
    height: 33
  },
  sliderRow: {
    flex: 1
  },
  left: {
    marginEnd: 226
  },
  text: {
    color: colors.light_transparent,
    fontSize: sizes.common_artist
  }
})

import React from "react"
import { Text, View, StyleSheet } from "react-native"
import Slider from "@react-native-community/slider"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"
import { render } from "react-dom"

export default class MusicStatusSlider extends React.Component {
  state = {
    value: 0,
    position: 0
  }

  componentDidMount() {
    this.props.updateSlider(this.increaseValue)
  }

  increaseValue = status => {
    this.setState({
      value: this.state.value + 1,
      position: status.positionMillis || 0
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sliderRow}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={300}
            step={0.5}
            value={this.state.value}
            minimumTrackTintColor='#FFFFFFB0'
            maximumTrackTintColor='#FFFFFF80'
          />
        </View>
        <View style={styles.indicator}>
          <Text style={[styles.text, styles.left]}>
            {Math.floor(this.state.position / 1000)}
          </Text>
          <Text style={[styles.text, styles.right]}>03:12</Text>
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

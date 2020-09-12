import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

export default MusicDetailsFooter = props => {
  const play_btn_name = props.pauseState ? "play" : "pause"
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.playMode} onPress={null}>
          <Entypo
            name={`shuffle`}
            size={sizes.small}
            color={colors.light_transparent}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.prevBtn} onPress={props.prevMusic}>
          <Entypo
            name={"controller-jump-to-start"}
            size={sizes.median}
            color={colors.light}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playBtn} onPress={props.togglePlay}>
          <Ionicons
            name={`ios-${play_btn_name}`}
            size={sizes.play_large}
            color={colors.light}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} onPress={props.nextMusic}>
          <Entypo
            name={"controller-next"}
            size={sizes.median}
            color={colors.light}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.options} onPress={null}>
          <Entypo
            name={`dots-three-horizontal`}
            size={sizes.small}
            color={colors.light_transparent}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  container: {
    backgroundColor: colors.dark_transparent,
    height: 110,
    paddingBottom: 15
  },
  prevBtn: {},
  playBtn: {
    marginStart: 38,
    marginEnd: 38
  },
  playMode: {
    marginEnd: 40
  },
  options: {
    marginStart: 40
  },
  nextBtn: {}
})

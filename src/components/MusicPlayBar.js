import React, { Component } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

export default MusicPlayBar = props => {
  const icon_name = props.pauseState ? "play" : "pause"
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.playBtn} onPress={props.toggleMusic}>
        <Ionicons
          name={`ios-${icon_name}`}
          size={sizes.play}
          color={colors.light}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={props.changeView}>
        <Text style={[styles.text, styles.title]}>
          {props.selected_music.title}
        </Text>
        <Text style={[styles.text, styles.artist]}>
          {props.selected_music.artist}
        </Text>
      </TouchableOpacity>
      <View style={styles.loveBtn}>
        <Ionicons name='ios-heart' size={sizes.heart} color={colors.light} />
      </View>
    </View>
  )
}

const playBtnArea = 40

const styles = StyleSheet.create({
  artist: {
    fontSize: 12
  },
  container: {
    backgroundColor: "dodgerblue",
    bottom: 48,
    flexDirection: "row",
    height: 46,
    width: "100%",
    position: "absolute"
  },
  text: {
    color: colors.light
  },
  textContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 15
  },
  loveBtn: {
    alignItems: "center",
    width: playBtnArea,
    backgroundColor: "#ffffff60",
    justifyContent: "center"
  },
  playBtn: {
    alignItems: "center",
    backgroundColor: "#ffffff60",
    justifyContent: "center",
    width: playBtnArea
  }
})

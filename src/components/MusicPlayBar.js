import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

import CustomText from "../components/CustomText"
import { colors, blurs } from "../ui/colors"
import sizes from "../ui/sizes"

export default MusicPlayBar = props => {
  const icon_name = props.pauseState ? "play" : "pause"
  return (
    // <View style={styles.container}>
    <ImageBackground
      source={{ uri: props.selected_music.albumArtUrl }}
      style={styles.background}
      imageStyle={styles.backgroundImage}
      blurRadius={blurs.scale2}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.playBtn} onPress={props.toggleMusic}>
          <Ionicons
            name={`ios-${icon_name}`}
            size={sizes.play}
            color={colors.light}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={props.changeView}>
          <CustomText style={[styles.text, styles.title]}>
            {props.selected_music.title}
          </CustomText>
          <CustomText style={[styles.text, styles.artist]}>
            {props.selected_music.artist}
          </CustomText>
        </TouchableOpacity>
        <View style={styles.loveBtn}>
          <Ionicons name='ios-heart' size={sizes.heart} color={colors.light} />
        </View>
      </View>
    </ImageBackground>

    // </View>
  )
}

const playBtnArea = 40

const styles = StyleSheet.create({
  artist: {
    color: colors.secondary_text,
    fontSize: sizes.common_artist,
    marginTop: 0
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    bottom: sizes.sticky_player_pos,
    height: 50,
    width: "100%",
    position: "absolute"
  },
  container: {
    backgroundColor: colors.dark_transparent,
    flex: 1,
    flexDirection: "row"
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
    fontSize: sizes.common_title,
    marginTop: -5,
    marginBottom: 2
  },
  loveBtn: {
    alignItems: "center",
    width: playBtnArea,
    justifyContent: "center",
    paddingEnd: 10
  },
  playBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: playBtnArea,
    paddingStart: 10
  }
})

import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImagePropTypes
} from "react-native"
import { color } from "react-native-reanimated"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

const MusicRow = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.onSelect(props)}>
    <Image style={styles.cover} source={{ uri: props.albumArtUrl }} />
    <View style={styles.details}>
      <Text style={styles.artist}>{props.artist}</Text>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.likesRow}>
        <Ionicons
          name='ios-heart'
          size={sizes.three_ver_dots}
          color={colors.tertiary_dark}
        />
        <Text style={styles.likes}>12K</Text>
      </View>
    </View>
    <View style={styles.options}>
      <Text style={styles.duration}>{props.duration}</Text>
      <Entypo
        style={styles.three_dots}
        name={"dots-three-vertical"}
        size={sizes.three_ver_dots}
        color={colors.secondary_dark}
      />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  artist: {
    color: colors.tertiary_dark
  },
  container: {
    backgroundColor: colors.light,
    borderColor: colors.gray_border,
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingVertical: 12,
    paddingStart: 15,
    paddingEnd: 10
  },
  cover: {
    borderColor: colors.tertiary_dark,
    borderWidth: 1,
    width: 76,
    height: 76,
    resizeMode: "cover"
  },
  duration: {
    color: colors.tertiary_dark
  },
  details: {
    flex: 1,
    paddingStart: 15
  },
  likesRow: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 3
  },
  likes: {
    color: colors.tertiary_dark,
    marginStart: 3,
    marginTop: -2
  },
  options: {
    paddingTop: 2
  },
  title: {},
  three_dots: {
    alignSelf: "center",
    marginTop: 26
    // backgroundColor: "red"
  }
})

export default MusicRow

import React, { Component } from "react"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImagePropTypes
} from "react-native"
import { color } from "react-native-reanimated"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

import CustomText from "../components/CustomText"
import { colors } from "../ui/colors"
import sizes from "../ui/sizes"

const MusicRow = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.onSelect(props)}>
    <Image style={styles.cover} source={{ uri: props.albumArtUrl }} />
    <View style={styles.details}>
      <CustomText style={styles.artist}>{props.artist}</CustomText>
      <CustomText style={styles.title}>{props.title}</CustomText>
      <View style={styles.likesRow}>
        <Ionicons
          style={styles.heart_small}
          name='ios-heart'
          size={sizes.heart_small}
          color={colors.tertiary_dark}
        />
        <CustomText style={styles.likes}>12K</CustomText>
      </View>
    </View>
    <View style={styles.options}>
      <CustomText style={styles.duration}>{props.duration}</CustomText>
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
    color: colors.tertiary_dark,
    fontSize: sizes.text_regular,
    marginBottom: 3
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
    color: colors.tertiary_dark,
    fontSize: sizes.text_regular
  },
  details: {
    flex: 1,
    paddingStart: 15
  },
  heart_small: {
    marginTop: 1
  },
  likesRow: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 3
  },
  likes: {
    color: colors.tertiary_dark,
    marginStart: 3,
    fontSize: sizes.common_artist
  },
  options: {
    paddingTop: 2
  },
  title: {
    fontSize: sizes.text_regular,
    marginBottom: 3
  },
  three_dots: {
    alignSelf: "center",
    marginTop: 26
    // backgroundColor: "red"
  }
})

export default MusicRow

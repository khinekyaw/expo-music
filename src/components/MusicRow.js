import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImagePropTypes
} from "react-native"
import { connect } from "react-redux"

import { colors } from "../ui/colors"

const MusicRow = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.onSelect(props)}>
    <Image style={styles.cover} source={{ uri: props.albumArtUrl }} />
    <Text style={styles.text}>Artist: {props.artist}</Text>
    <Text style={styles.text}>Title: {props.title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cornflowerblue",
    borderColor: colors.light,
    borderBottomWidth: 2,
    flexDirection: "row"
  },
  cover: {
    width: 80,
    height: 80,
    resizeMode: "cover"
  },
  text: {
    color: colors.light,
    padding: 5
  }
})

export default MusicRow

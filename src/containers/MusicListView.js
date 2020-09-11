import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  ImagePropTypes
} from "react-native"
import { connect } from "react-redux"

import { colors } from "../ui/colors"
import MusicRow from "../components/MusicRow"
import { selectMusic } from "../redux/actions"
import TRACKS from "../api/Tracks"

const MusicListView = props => (
  <View>
    <SectionList
      sections={TRACKS}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <MusicRow {...item} onSelect={props.selectMusic} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.listHeader}>{title}</Text>
      )}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {},
  listHeader: {
    fontSize: 20
  },
  text: {}
})

export default connect(null, { selectMusic })(MusicListView)

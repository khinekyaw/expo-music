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

const MusicListView = props => (
  <View>
    <SectionList
      sections={props.tracks}
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

const mapStateToProps = state => ({
  tracks: state.tracks
})

export default connect(mapStateToProps, { selectMusic })(MusicListView)

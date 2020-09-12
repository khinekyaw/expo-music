import React, { Component, version } from "react"
import { View, StyleSheet, SectionList } from "react-native"
import { connect } from "react-redux"

import { colors } from "../ui/colors"
import MusicRow from "../components/MusicRow"
import MusicSectionHeader from "../components/MusicSectionHeader"
import { selectMusic } from "../redux/actions"

const MusicListView = props => (
  <View>
    <SectionList
      sections={props.tracks}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <MusicRow {...item} onSelect={props.selectMusic} />
      )}
      renderSectionHeader={MusicSectionHeader}
      ListFooterComponent={<View style={{ marginVertical: 35 }}></View>}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {},
  text: {}
})

const mapStateToProps = state => ({
  tracks: state.tracks
})

export default connect(mapStateToProps, { selectMusic })(MusicListView)

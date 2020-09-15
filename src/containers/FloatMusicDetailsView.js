import React, { Component } from "react"
import Constants from "expo-constants"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native"
import { connect } from "react-redux"
import { selectMusic } from "../redux/actions"

import { colors, blurs } from "../ui/colors"
import MusicDetailsHeader from "../components/MusicDetailsHeader"
import MusicDetailsFooter from "../components/MusicDetailsFooter"
import MusicStatusSlider from "../components/MusicStatusSlider"
import MusicDetailsActionBar from "../components/MusicDetailsActionBar"
import sizes from "../ui/sizes"

class FloatMusicDetailsView extends Component {
  getMusicId = () => {
    const { data } = this.props.tracks[0]
    const idx = data.findIndex(
      obj => this.props.selected_music.musicId === obj.musicId
    )
    return { id: idx, data: data }
  }

  backPrev = () => {
    const info = this.getMusicId()
    if (!info.id) return
    this.props.selectMusic(info.data[info.id - 1])
  }

  gotoNext = () => {
    const info = this.getMusicId()
    if (info.id + 1 === info.data.length) return
    this.props.selectMusic(info.data[info.id + 1])
  }

  render() {
    const { selected_music } = this.props
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: selected_music.albumArtUrl }}
          style={styles.background}
          imageStyle={styles.backgroundImage}
          blurRadius={blurs.scale1}>
          <MusicDetailsHeader
            title={selected_music.title}
            artist={selected_music.artist}
            changeView={this.props.changeView}
          />
          <View style={styles.imageContainer}>
            <Image
              style={styles.cover}
              source={{ uri: selected_music.albumArtUrl }}
            />
          </View>
          <MusicDetailsActionBar />
          <MusicStatusSlider
            title={selected_music.title}
            musicStatus={this.props.music_status}
            setPosition={this.props.setPosition}
          />
          <MusicDetailsFooter
            pauseState={this.props.pauseState}
            togglePlay={this.props.toggleMusic}
            nextMusic={this.gotoNext}
            prevMusic={this.backPrev}
          />
        </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  selected_music: state.selected_music,
  tracks: state.tracks,
  music_status: state.music_status
})

export default connect(mapStateToProps, { selectMusic })(FloatMusicDetailsView)

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    flex: 1
  },
  backgroundImage: {},
  container: {
    backgroundColor: colors.secondary_dark,
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight
  },
  cover: {
    borderRadius: 3,
    width: sizes.cover_size_large,
    height: sizes.cover_size_large,
    resizeMode: "cover"
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: colors.dark_transparent,
    flex: 1,
    justifyContent: "center"
  }
})

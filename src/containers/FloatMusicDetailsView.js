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
import Entypo from "react-native-vector-icons/Entypo"
import { selectMusic } from "../redux/actions"

import { colors } from "../ui/colors"
import MusicDetailsHeader from "../components/MusicDetailsHeader"
import MusicDetailsFooter from "../components/MusicDetailsFooter"
import MusicStatusSlider from "../components/MusicStatusSlider"
import sizes from "../ui/sizes"

class FloatMusicDetailsView extends Component {
  render() {
    const { selected_music } = this.props
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: selected_music.albumArtUrl }}
          style={styles.background}
          imageStyle={styles.backgroundImage}
          blurRadius={5}>
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
          <MusicStatusSlider />
          <MusicDetailsFooter
            pauseState={this.props.pauseState}
            togglePlay={this.props.toggleMusic}
          />
        </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  selected_music: state.selected_music
})

export default connect(mapStateToProps, { selectMusic })(FloatMusicDetailsView)

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    flex: 1
  },
  backgroundImage: {},
  container: {
    backgroundColor: colors.dark_transparent,
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

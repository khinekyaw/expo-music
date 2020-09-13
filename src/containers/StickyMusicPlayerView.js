import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { connect } from "react-redux"

import FloatMusicDetailsView from "./FloatMusicDetailsView"
import MusicPlayerAsync from "../components/MusicPlayerAsync"
import MusicPlayBar from "../components/MusicPlayBar"
import { updateMusicStatus } from "../redux/actions"

const PureMusicPlayer = new MusicPlayerAsync()

class StickyMusicPlayerView extends Component {
  state = {
    showBar: true,
    pause: true
  }

  componentDidMount() {
    PureMusicPlayer.setPlayback(this.setMusicStatus)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected_music !== this.props.selected_music) {
      this.reloadMusic(this.props.selected_music.audioUrl)
      console.log("Music changed")
    }
  }

  setMusicStatus = status => {
    this.props.updateMusicStatus(status)
  }

  changeView = () => this.setState({ showBar: !this.state.showBar })

  reloadMusic = source => {
    PureMusicPlayer.reloadAndPlay(source)
  }

  toggleMusic = () => {
    console.log("Pressed Play")
    this.setState({ pause: PureMusicPlayer.isPlaying })
    PureMusicPlayer.togglePlay(this.props.selected_music.audioUrl)
  }

  render() {
    return this.state.showBar ? (
      <MusicPlayBar
        {...this.props}
        pauseState={this.state.pause}
        toggleMusic={this.toggleMusic}
        changeView={this.changeView}
      />
    ) : (
      <FloatMusicDetailsView
        pauseState={this.state.pause}
        toggleMusic={this.toggleMusic}
        changeView={this.changeView}
      />
    )
  }
}

const mapStateToProps = state => ({
  selected_music: state.selected_music
})

export default connect(mapStateToProps, { updateMusicStatus })(
  StickyMusicPlayerView
)

const styles = StyleSheet.create({})

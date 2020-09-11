import { Audio } from "expo-av"

export default class MusicPlayerAsync {
  constructor() {
    this.isPlaying = false
    this.musicLoaded = false
    this.soundObject = new Audio.Sound()
    this.source = null
  }

  loadMusic = async source => {
    // console.log("Loading a music")
    if (this.source !== source) {
      this.source = source
      await this.soundObject.loadAsync({ uri: source })
      this.musicLoaded = true
      // console.log("Loading finished")
    }
  }

  unloadMusic = async () => {
    await this.soundObject.unloadAsync()
  }

  playMusic = async () => {
    await this.soundObject.playAsync()
  }

  pauseMusic = async () => {
    await this.soundObject.pauseAsync()
  }

  reloadAndPlay = async source => {
    // console.log("Reloading")
    await this.unloadMusic()
    await this.loadMusic(source)
    if (this.isPlaying) await this.playMusic()
    // console.log("Reloading finished")
  }

  togglePlay = async source => {
    try {
      if (!this.musicLoaded) await this.loadMusic(source)
      if (this.isPlaying) {
        await this.pauseMusic()
      } else {
        await this.playMusic()
      }
    } catch (error) {
      console.log("MusicPlayer : There is an error in toggle!")
    }
    this.isPlaying = !this.isPlaying
  }
}

// require("../../assets/songs/aw.mp3")

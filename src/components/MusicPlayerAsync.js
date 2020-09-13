import { Audio } from "expo-av"

export default class MusicPlayerAsync {
  constructor() {
    this.isPlaying = false
    this.isLoading = false
    this.musicLoaded = false
    this.soundObject = new Audio.Sound()
    this.source = null
    this.token = 0
    this.first_toggle = true
  }

  setPlayback = func => {
    this.playbackFunc = func
  }

  getSoundObjAsync = async (token, source) => {
    const tempSoundObj = new Audio.Sound()
    await tempSoundObj.loadAsync({ uri: source }, (downloadFirst = true))
    return [token, tempSoundObj]
  }

  loadMusic = async source => {
    // console.log("Loading a music")
    if (this.source !== source) {
      this.source = source
      this.token += 1
      const [returned_token, tempSoundObj] = await this.getSoundObjAsync(
        this.token,
        source
      )
      // console.log("\nReturned_token: ")
      // console.log(returned_token)
      if (this.token === returned_token) {
        this.soundObject = tempSoundObj
        await this.soundObject.setIsLoopingAsync(true)
        this.playbackFunc &&
          this.soundObject.setOnPlaybackStatusUpdate(status =>
            this.playbackFunc(status)
          )
        return true
      } else {
        return false
      }
    }
  }

  // Object {
  //   "androidImplementation": "SimpleExoPlayer",
  //   "didJustFinish": false,
  //   "durationMillis": 222458,
  //   "isBuffering": false,
  //   "isLoaded": true,
  //   "isLooping": false,
  //   "isMuted": false,
  //   "isPlaying": false,
  //   "playableDurationMillis": 61648,
  //   "positionMillis": 2134,
  //   "progressUpdateIntervalMillis": 500,
  //   "rate": 1,
  //   "shouldCorrectPitch": false,
  //   "shouldPlay": false,
  //   "uri": "/uc",
  //   "volume": 1,
  // }

  unloadMusic = async () => {
    try {
      await this.soundObject.unloadAsync()
      this.musicLoaded = false
    } catch (error) {}
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

    if (this.isPlaying) {
      const OK = await this.loadMusic(source)
      if (OK) {
        await this.playMusic()
        this.musicLoaded = true
      }
    }
    // console.log("Reloading finished")
  }

  togglePlay = async source => {
    try {
      if (!this.musicLoaded) {
        await this.loadMusic(source)
        this.musicLoaded = true
      }
      if (this.isPlaying) {
        await this.pauseMusic()
      } else {
        await this.playMusic()
      }
    } catch (error) {
      console.log("MusicPlayer : There is an error in toggle!")
      console.log("Sound is not loaded")
    }
    this.isPlaying = !this.isPlaying
  }
}

// require("../../assets/songs/aw.mp3")

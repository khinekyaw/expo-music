import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"

import reducer from "./reducers"
import { selectMusic, updateTracks } from "./actions"
import TRACKS from "../api/Tracks"

const store = new createStore(reducer, applyMiddleware(thunk))

store.dispatch(
  selectMusic({
    musicId: "000004",
    title: "Scooby Doo",
    artist: "by Shan",
    duration: "00:14",
    albumArtUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9a/Scooby-gang-1969.jpg",
    audioUrl:
      "https://drive.google.com/uc?id=1CtRQxkTSCVMdvp2a5mDrjrlXaKXPJkmr&export=download"
  })
)

store.dispatch(updateTracks(TRACKS))
store.dispatch(updateTracks(TRACKS))
store.dispatch(updateTracks(TRACKS))
// store.dispatch(updateTracks(TRACKS))

export default store

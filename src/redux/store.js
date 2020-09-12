import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"

import reducer from "./reducers"
import { selectMusic, updateTracks } from "./actions"
import TRACKS from "../api/Tracks"

const store = new createStore(reducer, applyMiddleware(thunk))

store.dispatch(
  selectMusic({
    musicId: "000002",
    title: "Fur Elise",
    artist: "Beethoven",
    duration: "2:55",
    albumArtUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/498px-Beethoven.jpg",
    audioUrl:
      "https://drive.google.com/uc?id=1ZjsdCvDt43fDcdN7JGnfboK2xpMeAEw5&export=download"
  })
)

store.dispatch(updateTracks(TRACKS))
store.dispatch(updateTracks(TRACKS))
store.dispatch(updateTracks(TRACKS))
// store.dispatch(updateTracks(TRACKS))

export default store

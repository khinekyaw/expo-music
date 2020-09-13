import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"

import reducer from "./reducers"
import { selectMusic, updateTracks } from "./actions"
import TRACKS from "../api/Tracks"

const store = new createStore(reducer, applyMiddleware(thunk))

store.dispatch(
  selectMusic({
    musicId: "000006",
    title: "Nightcore - In Your Eyes",
    artist: "Syrex",
    duration: "03:34",
    albumArtUrl:
      "https://drive.google.com/uc?id=10xsF0N-Wt-2lvdDCvLu7-h8-AxM_-kKP&export=download",
    audioUrl:
      "https://drive.google.com/uc?id=1Ewn5HFLuR-QwaD2F4f8QEI46FwjtCqgh&export=download"
  })
)

store.dispatch(updateTracks(TRACKS))
store.dispatch(updateTracks(TRACKS))
store.dispatch(updateTracks(TRACKS))
// store.dispatch(updateTracks(TRACKS))

export default store

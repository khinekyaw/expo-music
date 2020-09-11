import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"

import reducer from "./reducers"
import { selectMusic } from "./actions"

const store = new createStore(reducer, applyMiddleware(thunk))

store.dispatch(
  selectMusic({
    title: "Fur Elise",
    artist: "Beethoven",
    albumArtUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/498px-Beethoven.jpg",
    audioUrl:
      "https://drive.google.com/uc?id=1ZjsdCvDt43fDcdN7JGnfboK2xpMeAEw5&export=download"
  })
)

export default store

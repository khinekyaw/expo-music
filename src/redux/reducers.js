import { combineReducers } from "redux"
import { SELECT_MUSIC, UPDATE_MUSIC, UPDATE_TRACKS } from "./actions"

const selectMusicReducer = (state = {}, action) => {
  if (action.type === SELECT_MUSIC) {
    return action.payload
  } else return state
}

const musicReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_MUSIC:
      return state
    case UPDATE_TRACKS:
      return [...state, ...action.payload]
    default:
      return state
  }
}

const reducer = combineReducers({
  selected_music: selectMusicReducer,
  tracks: musicReducer
})

export default reducer

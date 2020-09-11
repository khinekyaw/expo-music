import { combineReducers } from "redux"
import { SELECT_MUSIC } from "./actions"

const selectMusicReducer = (state = {}, action) => {
  if (action.type === SELECT_MUSIC) {
    return action.payload
  } else return state
}

const reducer = combineReducers({
  selected_music: selectMusicReducer
})

export default reducer

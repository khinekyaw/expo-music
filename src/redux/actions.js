// action types
export const SELECT_MUSIC = "SELECT_MUSIC"
export const UPDATE_MUSIC = "UPDATE_MUSIC"
export const UPDATE_TRACKS = "UPDATE_TRACKS"
export const UPDATE_MUSIC_STATUS = "UPDATE_MUSIC_STATUS"

// action creators
export const selectMusic = update => ({
  type: SELECT_MUSIC,
  payload: update
})

export const updateMusic = update => ({
  type: UPDATE_MUSIC,
  payload: update
})

export const updateTracks = update => ({
  type: UPDATE_TRACKS,
  payload: update
})

export const updateMusicStatus = update => ({
  type: UPDATE_MUSIC_STATUS,
  payload: update
})

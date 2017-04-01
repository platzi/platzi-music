function reducer(state, action) {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return { ...state, playlist: action.payload.playlist }
    case 'SET_CURRENT_TRACK':
      return { ...state, currentTrack: action.payload.index}
    default:
      return state
  }
}

export default reducer

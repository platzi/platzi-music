function reducer(state, action) {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return { ...state, playlist: action.payload.playlist }
    default:
      return state
  }
}

export default reducer

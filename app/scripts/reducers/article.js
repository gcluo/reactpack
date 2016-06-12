const article = (state, action) => {
  switch (action.type) {
    case 'SHARE':
      return action.article
    default:
      return state
  }
}

export default article

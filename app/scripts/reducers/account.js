const select = (state = 'index', action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'SELECT':
      return action.active
    default:
      return state
  }
}

export default select

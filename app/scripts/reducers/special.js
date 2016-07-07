const special = (state = [], action) => {
  switch (action.type) {

    case 'SEARCH':
      return action.condition
    case 'TIME':
    console.log(action.messages);
      return [...action.messages]
    default:
      return state
  }
}

export default special

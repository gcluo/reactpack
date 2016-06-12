export const special = (condition) => {
  return {
    type: 'SEARCH',
    condition
  }
}
export const items = () => {
  return {
    type: 'ITEMS',
    messages
  }
}

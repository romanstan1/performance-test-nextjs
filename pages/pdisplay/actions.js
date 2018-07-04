
export const addToBasket = (product) => (dispatch) => {
  return dispatch({
    type: 'ADD_TO_BASKET',
    payload: product
  })
}
export const updateRecentlyViewed = (items) => (dispatch) => {
  return dispatch({
    type: 'UPDATE_RECENTLY_VIEWED',
    payload: items
  })
}

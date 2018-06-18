
export const addToBasket = (product) => (dispatch) => {
  return dispatch({
    type: 'ADD_TO_BASKET',
    payload: product
  })
}

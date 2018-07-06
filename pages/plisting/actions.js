export const addListings = (data, type) => {
  return dispatch => dispatch({
    type, payload: Object.values(data)
  })
}
export const viewProductPdp = (item) => {
  return dispatch => dispatch({
    type: 'VIEW_PRODUCT_PDP',
    payload: item
  })
}

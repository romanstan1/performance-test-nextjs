
export const toggleScanning = (bool) => {
  return dispatch => dispatch({
    type: 'TOGGLE_SCANNING',
    payload: bool
  })
}
export const detectedBarcode = (code) => {
  return dispatch => dispatch({
    type: 'DETECTED_BARCODE',
    payload: code
  })
}
export const addToBasket = (product) => {
  return dispatch => dispatch({
    type: 'ADD_TO_BASKET',
    payload: product
  })
}
export const clearContactLense = (product) => {
  return dispatch => dispatch({
    type: 'CLEAR_CONTACT_LENSE'
  })
}

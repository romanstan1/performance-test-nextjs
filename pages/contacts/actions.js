
export const toggleScanning = (item) => {
  return dispatch => dispatch({
    type: 'TOGGLE_SCANNING'
  })
}
export const detectedBarcode = (code) => {
  return dispatch => dispatch({
    type: 'DETECTED_BARCODE',
    payload: code
  })
}
export const addContactToBasket = (product) => {
  return dispatch => dispatch({
    type: 'ADD_CONTACT_TO_BASKET',
    payload: product
  })
}


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

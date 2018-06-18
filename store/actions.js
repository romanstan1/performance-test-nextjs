export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}
// 
// // ACTIONS
// export const serverRenderClock = (isServer) => dispatch => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }
//
// export const startClock = dispatch => {
//   return setInterval(() => {
//     // Dispatch `TICK` every 1 second
//     dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//   }, 1000)
// }

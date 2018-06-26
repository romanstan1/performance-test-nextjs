
const capitalize = st => st.replace(/\w\S*/g, tx => tx.charAt(0).toUpperCase() + tx.substr(1).toLowerCase())

export async function fetchSearchItems(query, dispatch) {

  const queryArr = query.toLowerCase().split(" ")
  const route = queryArr.pop()
  const keyword = queryArr.join(' ')
  const data = await Promise.all([
    colorSearch(keyword, route),
    brandSearch(keyword, route),
    priceSearch(queryArr, route)
  ]);
  const results = [].concat(...data)
  dispatch({
    type: 'ADD_SEARCH_RESULTS',
    payload: {
      query: query,
      results: results,
      route: route
    }
  })
}

function colorSearch(keyword, route) {
 return fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="color"&equalTo="${keyword}"`)
  .then(res => res.json())
  .then(res => {
    if(res.error) return []
    else return Object.values(res)
  })
  .catch(error => {
    console.log('error:', error)
    return []
  })
}

function brandSearch(keyword, route) {
 return fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="brand"&equalTo="${capitalize(keyword)}"`)
  .then(res => res.json())
  .then(res => {
    if(res.error) return []
    else return Object.values(res)
  })
  .catch(error => {
    console.log('error:', error)
    return []
  })
}

function priceSearch(queryArr, route) {
 if(queryArr.length === 2 && queryArr[1].charAt(0) === '£') {

   let operator = ''
   if(queryArr[0] === 'under') operator = 'endAt'
   else if (queryArr[0] === 'over') operator = 'startAt'

   const numOfPounds = parseInt(queryArr[1].substring(1))

   return fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="price"&${operator}=${numOfPounds}`)
   .then(res => res.json())
   .then(res => {
     if(res.error) return []
     else return Object.values(res)
   })
   .catch(error => {
     console.log('error:', error)
     return []
   })

   return search(route, operator, numOfPounds)
 }

 return []
}



//
// function search(keyword, route) {
//
//   const BRAND_URL = `https://specsavers-images.firebaseio.com/${route}.json?orderBy="brand"&equalTo="${capitalize(keyword)}"`
//   const COLOR_URL = `https://specsavers-images.firebaseio.com/${route}.json?orderBy="color"&equalTo="${keyword}"`
//   const PRICE_URL = `https://specsavers-images.firebaseio.com/${route}.json?orderBy="price"&${operator}=${numOfPounds}`
//
//
//   return fetch(PRICE_URL)
//   .then(res => res.json())
//   .then(res => {
//     if(res.error) return []
//     else return Object.values(res)
//   })
//   .catch(error => {
//     console.log('error:', error)
//     return []
//   })
// }

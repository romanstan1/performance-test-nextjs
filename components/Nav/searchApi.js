
const capitalize = st => st.replace(/\w\S*/g, tx => tx.charAt(0).toUpperCase() + tx.substr(1).toLowerCase())

export async function fetchSearchItems(query, dispatch) {

  const queryArr = query.toLowerCase().split(" ")
  const route = queryArr.pop()
  const keyword = queryArr.join(' ')

  const data = await Promise.all([
    colorSearch(keyword, route),
    brandSearch(keyword, route)
    // priceSearch(keyword, route)
  ]);

  dispatch({
    type: 'ADD_SEARCH_RESULTS',
    payload: {
      query: query,
      results: [].concat(...data),
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
}

function brandSearch(keyword, route) {
 return fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="brand"&equalTo="${capitalize(keyword)}"`)
  .then(res => res.json())
  .then(res => {
    if(res.error) return []
    else return Object.values(res)
  })
}

// function priceSearch(keyword, route) {
//  return fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="price"&startAt="${keyword}"`)
//   .then(res => res.json())
//   .then(res => {
//     if(res.error) return null
//     else return res
//   })
// }


// fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="$key"&startAt="${start}"&endAt="${end}"`)
// const data = await res.json()


const capitalize = st => st.replace(/\w\S*/g, tx => tx.charAt(0).toUpperCase() + tx.substr(1).toLowerCase())

export async function fetchSearchItems(query, dispatch) {

  const queryArr = query.toLowerCase().split(" ")
  const route = queryArr.pop()
  const keyword = queryArr.join(' ')

  let operator = ''
  let numOfPounds = ''
  let allow = true

  if(queryArr.length === 2 && queryArr[1].charAt(0) === '£') { // logic for priceCheck query
    if(queryArr[0] === 'under') operator = 'endAt'
    else if (queryArr[0] === 'over') operator = 'startAt'
    numOfPounds = parseInt(queryArr[1].substring(1))
  } else {
    allow = false
  }

  const data = await Promise.all([
    search(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="color"&equalTo="${keyword}"`, true),
    search(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="brand"&equalTo="${capitalize(keyword)}"`, true),
    search(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="price"&${operator}=${numOfPounds}`, allow)
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

const search = (url, allow) => {
  if(!allow) return []
  return fetch(url)
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

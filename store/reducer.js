const initialState = {
  basket: [
    // {
    //   brand: "The Spectacle Store",
    //   id: "25240283",
    //   image: "25240283-front-940x529.jpg",
    //   price: "79"
    // },
  ],
  data:[],
  page: 1,
  search: {
    results: [],
    query: '',
    route: null,
    resultsShown: 0
  },
  searchDrawerOpen: false

}

export default (state = initialState, action) => {
  // console.log(action.type, state)
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basket: [].concat(state.basket, action.payload)
      }
    }
    case "DELETE_ITEM": {
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload)
      }
    }
    case "ADD_MORE_LISTINGS": {
      return {
        ...state,
        data: [].concat(state.data, action.payload),
        page: state.page + 1
      }
    }
    case "ADD_INITIAL_LISTINGS": {
      return {
        ...state,
        data: action.payload,
        page: 1
      }
    }
    case "VIEW_PRODUCT_PDP": {
      return {
        ...state,
        product: action.payload
      }
    }
    case "ADD_SEARCH_RESULTS": {
      return {
        ...state,
        search: {
          results: action.payload.results,
          query: action.payload.query,
          route: action.payload.route,
          resultsShown: action.payload.results.length > 10 ? 10 : action.payload.results.length
        }
      }
    }
    case "CLEAR_SEARCH_RESULTS": {
      return {
        ...state,
        search: {
          results: [],
          query: '',
          route: null,
          resultsShown: 1
        }
      }
    }
    case "OPEN_SEARCH_DRAWER": {
      return {
        ...state,
        searchDrawerOpen: action.payload
      }
    }
    case "SHOW_MORE_SEARCH_ITEMS": {
      const {resultsShown, results} = state.search
      return {
        ...state,
        search: {
          ...state.search,
          resultsShown: results.length > resultsShown + 10 ?
            resultsShown + 10 : results.length
        }
      }
    }
    default:
      return state;
  }
}

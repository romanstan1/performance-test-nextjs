const initialState = {
  basket: [
    // {
    //   brand: "The Spectacle Store",
    //   id: "25240283",
    //   image: "25240283-front-940x529.jpg",
    //   price: "79"
    // },
    // {
    //   brand: "Kylie Minogue",
    //   id: "25240313",
    //   image: "25240313-front-940x529.jpg",
    //   price: "89"
    // }
  ],
  data:[],
  page: 1,
  search: {
    results: [],
    query: '',
    route: null
  },
  searchDrawerOpen: false

}

export default (state = initialState, action) => {
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
          route: action.payload.route
        }
      }
    }
    case "CLEAR_SEARCH_RESULTS": {
      return {
        ...state,
        search: {
          results: [],
          query: '',
          route: null
        }
      }
    }
    case "OPEN_SEARCH_DRAWER": {
      return {
        ...state,
        searchDrawerOpen: action.payload
      }
    }
    default:
      return state;
  }
}

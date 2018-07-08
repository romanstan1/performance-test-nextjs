import {lookUpProduct} from './modules'

const initialState = {
  basket: [],
  data:[],
  page: 1,
  search: {
    results: [],
    query: '',
    route: null,
    resultsShown: 0
  },
  searchDrawerOpen: false,
  user: null,
  recent: null,
  scanning: false,
  contactLense: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      console.log('ADD_TO_BASKET FIRED!')
      return {
        ...state,
        basket: [].concat(state.basket, action.payload),
        contactLense: null,
        scanning: false
      }
    }
    case "DELETE_ITEM": {
      return {
        ...state,
        basket: state.basket.filter(item => item.uuid !== action.payload)
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
    case "ADD_USER_GLOBALLY": {
      return {
        ...state,
        user: action.payload
      }
    }
    case "UPDATE_RECENTLY_VIEWED": {
      return {
        ...state,
        recent: action.payload
      }
    }
    case "SET_NEW_BASKET": {
      const basket = Object.entries(action.payload).map(pair => ({...pair[1], uuid: pair[0]}))
      return {
        ...state,
        basket: basket
      }
    }
    case "TOGGLE_SCANNING": {
      return {
        ...state,
        scanning: action.payload
      }
    }
    case "CLEAR_CONTACT_LENSE": {
      return {
        ...state,
        contactLense: null
      }
    }
    case "DETECTED_BARCODE": {
      const product = lookUpProduct(action.payload)
      return {
        ...state,
        contactLense: product
      }
    }
    default:
      return state;
  }
}

const initialState = {
  basket: [
    {
      brand: "The Spectacle Store",
      id: "25240283",
      image: "25240283-front-940x529.jpg",
      price: "79"
    },
    {
      brand: "Kylie Minogue",
      id: "25240313",
      image: "25240313-front-940x529.jpg",
      price: "89"
    }
  ],
  data:[],
  page: 1
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
    case "ADD_INITIAL_PROPS": {
      return {
        ...state,
        data: action.payload,
        page: 1
      }
    }
    default:
      return state;
  }
}

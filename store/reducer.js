const initialState = {
  basket: [
    {
      brand: "The Spectacle Store",
      color: "jet black elclipse",
      id: "111105c53924-9531-4da9-829f-13985b119ecc",
      image: "c2bb2b59d1355c17a00630b0c1810d59.jpg",
      price: "79"
    },
    {
      brand: "The Spectacle Store",
      color: "midnight blue",
      id: "DDD05c53924-9531-4da9-829f-13985b119ecc",
      image: "c2bb2b59d1355c17a00630b0c1810d59.jpg",
      price: "89"
    }
  ]
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
    default:
      return state;
  }
}

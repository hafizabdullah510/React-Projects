export const reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
      featured_products: action.payload
        .sort(() => 0.5 - Math.random())
        .slice(0, 3),
      isFeaturedLoading: false,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT") {
    return {
      ...state,
      single_product: {
        ...action.payload,
        mainImg: {
          url: action.payload.images[0].url,
          id: action.payload.images[0].id,
        },
        selectedColor: action.payload.colors[0],
        cartAmount: 1,
      },

      isLoading: false,
    };
  }
  if (action.type === "SET_FEATURED_LOADING") {
    return { ...state, isFeaturedLoading: true };
  }
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "UPDATE_IMG") {
    return {
      ...state,
      single_product: {
        ...state.single_product,
        mainImg: Object.assign(
          {},
          ...state.single_product.images.filter(
            (imgItem) => imgItem.id === action.payload
          )
        ),
      },
    };
  }
  if (action.type === "UPDATE_COLOR") {
    return {
      ...state,
      single_product: {
        ...state.single_product,
        selectedColor: action.payload,
      },
    };
  }
  if (action.type === "UPDATE_CART_AMOUNT") {
    return {
      ...state,
      single_product: {
        ...state.single_product,
        cartAmount:
          action.payload === "plus"
            ? state.single_product.cartAmount + 1
            : state.single_product.cartAmount > 1
            ? state.single_product.cartAmount - 1
            : 1,
      },
    };
  }
  throw new Error("No Matching Action Type");
};

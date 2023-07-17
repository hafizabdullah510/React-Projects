export const reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
      filtered_products: action.payload.sort((a, b) =>
        a.price > b.price ? 1 : -1
      ),

      filters: {
        ...state.filters,
        max_price: Math.max(...action.payload.map((item) => item.price)),
      },
      isLoading: true,
    };
  }
  if (action.type === "APPLY_PROPERTIES") {
    return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      },
    };
  }
  if (action.type === "SET_VIEW") {
    return { ...state, grid_view: action.payload === "list" ? false : true };
  }

  if (action.type === "CLR_FILTER") {
    return {
      ...state,
      filtered_products: action.payload,

      filters: {
        ...state.filters,
        input: "",
        category: "all",
        company: "all",
        color: "all",
        min_price: 3099,
        max_price: Math.max(...action.payload.map((item) => item.price)),
        price: 309999,
        shipping: false,
      },
    };
  }
  if (action.type === "FILTER_PRODUCTS") {
    return {
      ...state,
      filtered_products: state.products.filter(
        (item) =>
          (item.category === state.filters.category ||
            state.filters.category === "all") &&
          item.name.includes(state.filters.input) &&
          (item.company === state.filters.company ||
            state.filters.company === "all") &&
          (item.colors.includes(state.filters.color) ||
            state.filters.color === "all") &&
          item.price <= state.filters.price &&
          (item.shipping === state.filters.shipping ||
            state.filters.shipping === false)
      ),
    };
  }
  if (action.type === "SORT") {
    return {
      ...state,
      filtered_products:
        action.payload.value === "highest"
          ? state.filtered_products.sort((a, b) => (a.price < b.price ? 1 : -1))
          : action.payload.value === "lowest"
          ? state.filtered_products.sort((a, b) => (a.price > b.price ? 1 : -1))
          : action.payload.value === "a-z"
          ? state.filtered_products.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.filtered_products.sort((a, b) => (a.name < b.name ? 1 : -1)),
    };
  }
  throw new Error("No Matching Action Type");
};

const initialStore = {
    products: [],
    // likes: []
    // comments: []
}

export const productReducer = (state = initialStore, { type, payload }) => {
    switch (type) {
        case 'GET_PRODUCTS':
            return { ...state, products: payload };
        case 'ADD_PRODUCT':
            return { ...state, products: [payload, ...state.products] };
        case 'UPDATE_PRODUCT':
            let updateTweet = state.products.filter(el => el.id !== payload.id)
            updateTweet.push(payload)
            return { ...state, products: updateTweet };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(el => el.id !== payload.id)
            }; 
        default:
            return state;
    }
}
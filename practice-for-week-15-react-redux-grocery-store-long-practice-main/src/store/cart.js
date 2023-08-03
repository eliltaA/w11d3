const ADDCARTITEM = 'ADDCARTITEM'
export const addCartItem = (produceId) => {
    return {
        type : ADDCARTITEM,
        produce: produceId
    }
}

const cartReducer = (state = {}, action) => {
    const nextState = {...state};
    switch (action.type) {
        case ADDCARTITEM:
            nextState[action.produce] = {id: action.produce, count:1}
            return nextState;
        default: 
            return state; 
    }
}

export default cartReducer;
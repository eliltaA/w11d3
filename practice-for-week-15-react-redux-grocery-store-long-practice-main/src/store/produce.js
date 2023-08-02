import produceData from '../mockData/produce.json';

const POPULATE = "POPULATE"
export const populateProduce = () => {
    return {
        type : POPULATE,
        produce: produceData
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
    case POPULATE:
        const newState = {};
        action.produce.forEach(prod => {
            // newState[prod.id] = prod;
            newState[prod["id"]] = prod;
        });
        return newState
    default:
        return state;
    }
}
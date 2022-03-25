import * as actions from '../actions/actionTypes.js';

export const globalErrorQueue = (state = [], action) => {
    switch (action.type) {
    case actions.DEQUEUE_GLOBAL_ERROR:
        return [...state.filter((_, index) => index !== 0)];
    case actions.ENQUEUE_GLOBAL_ERROR:
        return [...state, action.error];
    default:
        return state;
    }
};

export default globalErrorQueue;

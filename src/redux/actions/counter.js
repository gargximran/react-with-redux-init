import {DECREMENT, INCREMENT} from "./index";


export const increment = () => ({
    type: INCREMENT,
    payload: 1
});

export const decrement = () => ({
    type: DECREMENT,
    payload: 1
});
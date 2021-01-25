import {DECREMENT, INCREMENT} from "../actions";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state += action.payload)
        case DECREMENT:
            return (state -= action.payload)
        default:
            return 10

    };
}


export default counterReducer;
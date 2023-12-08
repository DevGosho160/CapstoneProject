import { CREATE_DISCUSSION, GET_DISCUSSIONS, GET_MESSAGES, SEND_MESSAGE } from "../actions/types";

const initialState = {
    messages: [],
    discussions: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case GET_DISCUSSIONS:
            return {
                ...state,
                discussions: action.payload
            }
        case CREATE_DISCUSSION:
            return {
                ...state,
                discussions: [...state.discussions, action.payload],
            }
        default:
            return state;
    }
}
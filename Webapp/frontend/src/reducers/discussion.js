import { GET_DISCUSSION, CREATE_DISCUSSION, POST_SENT} from '../actions/types';
import { DISCUSSION_MAIN, CREATE_DISCUSSIONUSER } from '../actions/types';

const initialState = {
    msgs: [],
    du: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DISCUSSION:
            return {
                ...state,
                msgs: action.payload,
            }
        case CREATE_DISCUSSION:
            return{
                ...state,
                msgs: action.payload,
            }
        case POST_SENT:
            return {
                ...state,
                msgs: [...state.msgs, action.payload],
            }
        case CREATE_DISCUSSIONUSER:
            return {
                ...state,
                du: [...state.du, action.payload]
            }
        case DISCUSSION_MAIN:
            return {
                ...state,
                msgs: action.payload,
            }
        default:
            return {
                state,
            }
    }
}
import axios from 'axios';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';
import { CREATE_DISCUSSIONUSER, DISCUSSION_MAIN, GET_DISCUSSION, CREATE_DISCUSSION, POST_SENT} from './types';


export const loadDiscussion = (di) => (dispatch, getState) => {
    axios
        .get(`discussion/api/message`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_DISCUSSION,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const createDiscussion = (discussion) => (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    axios
        .post('discussion/api/newdiscussion/', discussion, config)
        .then((res) => {
            dispatch({
                type: CREATE_DISCUSSION,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const sendMessage = (message, di) => (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    axios
        .post(`discussion/api/message/`, message, config)
        .then((res) => {
            dispatch({
                type: POST_SENT,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const getDiscussions = () => (dispatch, getState) => {
    axios
        .get('discussion/api/discussion/', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: DISCUSSION_MAIN,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addParticipants = (dus) => (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    axios
            .post('discussion/api/discussionuser/', dus, config)
            .then((res) => {
                dispatch({
                    type: CREATE_DISCUSSIONUSER,
                    payload: res.data,
                });
            })
            .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
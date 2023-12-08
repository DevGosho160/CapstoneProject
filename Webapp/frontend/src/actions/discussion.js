import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { CREATE_DISCUSSION, GET_DISCUSSIONS, GET_MESSAGES, SEND_MESSAGE } from './types';

export const getMessages = () => (dispatch, getState) => {
    axios
        .get('/discussion/api/message/', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_MESSAGES,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, error.response.status)));
};

export const sendMessage = (message) => (dispatch, getState) => {
    axios
        .post('/discussion/api/message/', message, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: SEND_MESSAGE,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const getDiscussions = () => (dispatch, getState) => {
    axios
        .get('/discussion/api/discussions/', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_DISCUSSIONS,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const createDiscussion = (discussion) => (dispatch, getState) => {
    axios
        .post('/discussion/api/discussions/', discussion, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: CREATE_DISCUSSION,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
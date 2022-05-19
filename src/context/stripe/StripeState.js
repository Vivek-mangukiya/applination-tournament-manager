import {
    GET_STRIPE_ACCOUNT,
    ADD_STRIPE_ACCOUNT_ERROR,
    CLEAR_STRIPE_ERROR_MESSAGES,
    ADD_STRIPE_ACCOUNT_MESSAGE,
    GET_STRIPE_ACCOUNT_ERROR,
} from '../Types';
import StripeContext from './stripeContext';
import stripeReducer from './stripeReducer';
import API from '../../Utils/API';
import React, { useReducer } from 'react';

const StripeState = (props) => {
const initialState = {
    privateKeyContext:null,
    secretKeyContext:null,
    addKeysError:null,
    addKeysMessage:null,
    getKeysError:null,
};

const [state, dispatch] = useReducer(stripeReducer, initialState);

const updateKeys = async(formData) => {
    const actualData = new FormData();
    // actualData.append('data', JSON.stringify(formData));
    actualData.append('publish_key', formData.publish_key);
    actualData.append('secret_key', formData.secret_key);
    API.post(`/updateKeys`, actualData)
        .then((response) => {
            console.log('updateKeys response: ', response);
            dispatch({
                type: ADD_STRIPE_ACCOUNT_MESSAGE,
                payload: response.data.message,
            });
        })
        .catch((error) => {
            console.log('updateKeys error: ', error.response.data.errorMessage);
            if (typeof error.response.data.errorMessage === 'string' || error.response.data.errorMessage instanceof String){
                dispatch({
                    type: ADD_STRIPE_ACCOUNT_ERROR,
                    payload: error.response.data.errorMessage,
                });
            }
            else{
                if(error.response.data.errorMessage.hasOwnProperty('secret_key')){
                    dispatch({
                        type: ADD_STRIPE_ACCOUNT_ERROR,
                        payload: error.response.data.errorMessage.secret_key[0],
                    });
                }
                if(error.response.data.errorMessage.hasOwnProperty('publish_key')){
                    dispatch({
                        type: ADD_STRIPE_ACCOUNT_ERROR,
                        payload: error.response.data.errorMessage.publish_key[0],
                    });
                }
            }
        })
}

const getKeys = () => {
    API.get(`/getKeys`)
    .then((response) => {
        console.log('getKeys response: ', response);
        dispatch({
            type: GET_STRIPE_ACCOUNT,
            payload: response,
        });
        })
        .catch((error) => {
        console.log('getKeys error', error.response);
            dispatch({
            type: GET_STRIPE_ACCOUNT_ERROR,
            payload: error,
            });
        });
}

const clearErrorMessages = () => {
    dispatch({
        type: CLEAR_STRIPE_ERROR_MESSAGES,
    });
}

return (
    <StripeContext.Provider
    value={{
        privateKeyContext:state.privateKeyContext,
        secretKeyContext:state.secretKeyContext,
        addKeysError:state.addKeysError,
        addKeysMessage:state.addKeysMessage,
        getKeysError:state.getKeysError,
        updateKeys,
        getKeys,
        clearErrorMessages,
    }}
    >
    {props.children}
    </StripeContext.Provider>
);
};

export default StripeState;

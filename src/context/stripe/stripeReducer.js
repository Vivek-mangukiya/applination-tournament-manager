import {
    GET_STRIPE_ACCOUNT,
    ADD_STRIPE_ACCOUNT_ERROR,
    ADD_STRIPE_ACCOUNT_MESSAGE,
    CLEAR_STRIPE_ERROR_MESSAGES,
  } from '../Types';
  
  //eslint-disable-next-line
  export default (state, actions) => {
    switch (actions.type) {
        case GET_STRIPE_ACCOUNT:
            return {
              ...state,
              privateKeyContext:actions.payload.data.data.publish_key,
              secretKeyContext:actions.payload.data.data.secret_key,
            };
        case ADD_STRIPE_ACCOUNT_ERROR:
            return{
                ...state,
                addKeysError:actions.payload,
            }
        case ADD_STRIPE_ACCOUNT_MESSAGE:
            return{
                ...state,
                addKeysMessage:actions.payload,
            }
        case CLEAR_STRIPE_ERROR_MESSAGES:
            return{
                ...state,
                addKeysError:null,
                addKeysMessage:null,
                getKeysError:null,
            }
        default:
            return state;
    }
  };
  
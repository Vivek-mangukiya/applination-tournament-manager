import {
    GENERATE_BRACKET, 
    GENERATE_BRACKET_ERROR, 
    GET_BRACKET, 
    RESET_BRACKET_MESSAGES, 
    EDIT_BRACKET_ERROR, 
    EDIT_BRACKET, 
    SET_DIVISION_DATA,
    CLOSE_BRACKET,
    CLOSE_BRACKET_ERROR,
} from '../Types';

export default (state, action) => {
    switch (action.type) {
        case GENERATE_BRACKET:
            return{
                ...state,
                generateBracketMessage:action.payload.data.Meaasge
            }
        case GENERATE_BRACKET_ERROR:
            // console.log("gbr",action.payload.response.data.message)
            return{
                ...state,
                generateBracketError:action.payload.response.data.message,
            }
        case GET_BRACKET:
            return{
                ...state,
                bracketData:action.payload.data && action.payload.data.bracket,
                screenOpaque:false,
            }
        case RESET_BRACKET_MESSAGES:
            console.log("In reset bracket messages!")
            return{
                ...state,
                generateBracketMessage:null,
                generateBracketError:null,
            }
        case EDIT_BRACKET_ERROR:
            return{
                ...state,
                
            }
        case EDIT_BRACKET:
            console.log("In EBR!")
            return{
                ...state,
                screenOpaque:true,
            }
        case SET_DIVISION_DATA:
            return{
                ...state,
                divName:action.payload.divName,
                divId:action.payload.divId,
                divIdx:action.payload.divIdx,
            }
        case CLOSE_BRACKET:
            return{
                ...state,
                completeBracketResponse: action.payload,
            }
        case CLOSE_BRACKET_ERROR:
            return{
                ...state,
                completeBracketError: action.payload,
            }
        default:
            return {
                ...state,
            };
    }
}
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, UPDATE_USER } from '../actions/types';

export default function(state={},action){
    switch(action.type){
        case AUTH_USER:
            return {...state, error:null,user:action.payload};
        case UNAUTH_USER:
            return {...state, error:null,user:null};
        case AUTH_ERROR:
            return {...state,error:action.payload,user:null};
        case UPDATE_USER:
            return {...state,user:action.payload}
    }
    return state;
}
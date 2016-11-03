import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, UPDATE_USER } from '../actions/types';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAM7evQA_1DGiyzFP7HH7OEPRrFdSqDk28",
    authDomain: "app1-4f075.firebaseapp.com",
    databaseURL: "https://app1-4f075.firebaseio.com",
    storageBucket: "app1-4f075.appspot.com",
    messagingSenderId: "448136798740"
};
firebase.initializeApp(config);

function login(email,password){
    return function(dispatch){
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user =>{
            console.log(user);
            dispatch({
                type:AUTH_USER,
                payload:user
            })
        })
        .catch(err =>{
            dispatch({
                type:AUTH_ERROR,
                payload:err
            });
            throw err;
        });
    }
}
function signup(email,password){
    return function(dispatch){
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user =>{
            dispatch({
                type:AUTH_USER,
                payload:user
            })
        })
        .catch(err =>{
            dispatch({
                type:AUTH_ERROR,
                payload:err
            });
            throw err;
        });
    }
}

function updateUser(data){
    var user = firebase.auth().currentUser;
    return function(dispatch){
        return user.updateProfile(data)
        .then(user =>{
            dispatch({
                type:UPDATE_USER,
                payload:firebase.auth().currentUser
            })
        })
    }
}

module.exports = {
    login:login,
    signup:signup,
    updateUser:updateUser
}
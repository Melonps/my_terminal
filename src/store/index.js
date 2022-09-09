import { createStore } from 'vuex'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../plugins/firebase";

export default createStore({
    state: {
        isSignedIn: false,
        uid: "",
    },
    mutations: {
        updateSignInState (state, isSignedIn) {
            state.isSignedIn = isSignedIn
        },
        updateUserID (state, uid) {
            state.uid = uid
        },
    },
    actions: {
        onAuth (context) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    context.commit('updateSignInState', true)
                    context.commit('updateUserID', uid)
                } else {
                    // User is signed out
                    context.commit('updateSignInState', false)
                    context.commit('updateUserID', "")
                }
            });
        },
    },
})
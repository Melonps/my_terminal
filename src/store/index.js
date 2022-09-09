import { createStore } from 'vuex'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../plugins/firebase";

export default createStore({
    state: {
        isSignedIn: false,
        userID:"",
    },
    mutations: {
        updateSignInState(isSignedIn) {
            this.state.isSignedIn = isSignedIn
        },
        updateUserID(userID) {
            this.state.userID = userID
        },
    },
    actions: {
        onAuth() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    this.$store.commit('updateSignInState', true)
                    this.$store.commit('updateUserID', uid)
                } else {
                    // User is signed out
                    this.$store.commit('updateSignInState', false)
                    this.$store.commit('updateUserID', "")
                }
            });
        },
    },
})
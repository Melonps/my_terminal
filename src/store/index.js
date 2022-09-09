import { createStore } from 'vuex'

export default createStore({
    state: {
        isSignedIn: false,
        userID:"",
    },
    mutations: {
        changeSignInState(isSignedIn) {
            this.state.isSignedIn = isSignedIn
        }
    }
})
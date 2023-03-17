import { createStore } from 'vuex'

// Firebase/Auth
import { onAuthStateChanged } from "firebase/auth";
// Firebase/Firestore
import { doc, getDoc,updateDoc } from "firebase/firestore";
// Plugins/Firebase
import { auth, db } from "../plugins/firebase";

export default createStore({
    state: {
        isSignedIn: false,
        uid: "",
        userSettings: {
            username: "Username",
            location: "Osaka",
            bg_image: "default",
        },
        shortcut: [
            {
                title: 'youtube',
                url: 'https://www.youtube.com/'
            },
            {
                title: 'github',
                url: 'https://github.co.jp/'
            }
        
        ]
    },
    mutations: {
        onAuth (state) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    state.isSignedIn = true
                    state.uid = uid
                } else {
                    // User is signed out
                    state.isSignedIn = false
                    state.uid = ""
                }
            });
        },
        updateUserSettings (state, userSettings) {
            state.userSettings = userSettings
        },
        updateShortcut (state, shortcut) {
            state.shortcut = shortcut
        },
        clearAuth (state) {
            state.uid = ""
            state.isSignedIn = false
            state.userSettings = {
                username: "Username",
                location: "Osaka",
                bg_image: "default",
            }
        },
        update: async function (state) {
            const docRef = doc(db, "users", state.uid);
            console.log(state.uid);
            await updateDoc(docRef, state);

        },
    },
    actions: {
        async fetchUserSettings (context) {
            const docRef = doc(db, "users", context.state.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const data = docSnap.data();
                console.log(data)
                context.commit('updateUserSettings', data["userSettings"])
                context.commit('updateShortcut', data["shortcut"])
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                alert("Failed to find user settings document.");
            }
        },
    },
    getters: {
        get_username (state) {
            return state.userSettings.username
        },
        get_location (state) {
            return state.userSettings.location
        }
    }
})
<template>
    <div>
        <img :src="require(`@/assets/img/${userSettings.bg_image}.jpg`)"/>
        <p>{{userSettings}}</p>
    </div>
    <form>
        <h2>Update JSON</h2>
        <div class="mb-3">
            <label for="inputUserName" class="form-label">User Name</label>
            <input v-model="userSettings.username" type="text" class="form-control" id="inputUserName">
        </div>
        <div class="mb-3">
            <label for="inputUserLocation" class="form-label">Location</label>
            <input v-model="userSettings.location" type="text" class="form-control" id="inputUserLocation">
        </div>
        <button type="button" class="btn btn-primary" v-on:click="updateUserSettings">
            Update
        </button>
    </form>
</template>

<script>
    import { getAuth } from "firebase/auth";
    import { doc, getDoc, updateDoc } from "firebase/firestore";
    import db from './../main'
    
    export default {
        created: function() {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                this.uid = user.uid
                console.log(this.uid)
            } else {
                // No user is signed in.
                alert("No user is signed in.")
            }
        },
        mounted: function() {
            this.fetchUserSettings(this.uid);
        },
        data: () => ({
            uid: "sample",
            userSettings: {
                username: 'hoge',
                location: 'Osaka',
                bg_image: 'default',
            },
        }),
        methods: {
            fetchUserSettings: async function() {
                const docRef = doc(db, "users", this.uid);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const data = docSnap.data();
                    if (data["user_settings"]) {
                        this.userSettings = data["user_settings"];
                    }
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    alert("Failed to find user settings document.");
                }
            },
            updateUserSettings: async function() {
                const docRef = doc(db, "users", this.uid);
                
                await updateDoc(docRef, {
                    "user_settings": this.userSettings
                });
            },
        },
    };
</script>
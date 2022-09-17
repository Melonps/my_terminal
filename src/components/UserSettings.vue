<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            User Settings
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <div class="mb-3">
                <label for="inputUserName" class="form-label">User Name</label>
                <input v-model="userSettings.username" v-bind:placeholder="userSettingsState.username" type="text" class="form-control" id="inputUserName">
            </div>
            <div class="mb-3">
                <label for="inputUserLocation" class="form-label">Location</label>
                <input v-model="userSettings.location" v-bind:placeholder="userSettingsState.location" type="text" class="form-control" id="inputUserLocation">
            </div>
            <div class="mb-3">
                <label for="imputBgImage" class="form-label">Background Image</label>
                <input v-model="userSettings.bg_image" v-bind:placeholder="userSettingsState.bg_image" type="url" class="form-control" id="imputBgImage">
            </div>
            <button type="button" class="btn btn-primary" v-on:click="updateUserSettings">
                Update
            </button>
        </ul>
    </div>
</template>

<script>
    import { doc, updateDoc } from "firebase/firestore";
    import { db } from "../plugins/firebase";

    export default {
        data: () => ({
            userSettings: {
                username: '',
                location: '',
                bg_image: '',
            },
        }),

        computed: {
            userSettingsState: function () {
                return this.$store.state.userSettings;
            },
            uidState: function () {
                return this.$store.state.uid;
            }
        },

        watch: {
            uidState () {
                this.$nextTick(() => {
                    this.$store.dispatch('fetchUserSettings')
                })
            }
        },

        methods: {
            updateUserSettings: async function() {
                const docRef = doc(db, "users", this.uidState);
                
                await updateDoc(docRef, {
                    "user_settings": this.userSettings
                });

                this.$store.dispatch('fetchUserSettings')
            },
        },
    };
</script>

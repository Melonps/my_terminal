<template>
    <div class="box">
        
        <div v-show="isShow">
            <div class="d-flex flex-row bd-highlight mb-3" >
                <div v-for="info of userSettingsState.shortcut" v-bind:key="info">
                    <div class="p-2 bd-highlight">
                        <button type="button" class="btn btn-outline-light" @click="getCreateUrl(info.url)">
                            <img v-bind:src="`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${info.url}https://ameblo.jp/staff/&size=64`" alt="test" class="icon_shortcut"/>
                            <p>{{info.title}}</p>
                        </button>
                        <div class="btn-group dropend">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <font-awesome-icon icon="fa-solid fa-bars" />
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-outline-info" @click="viewChange()">
        <font-awesome-icon icon="fa-solid fa-house" />
    </button>
</template>

<script>
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../plugins/firebase";

export default {
    data() {
        return {
            isShow: false,
        }
    },
    computed: {
        userSettingsState: function () {
            return this.$store.state.userSettings;
        },
        uidState: function () {
            return this.$store.state.uid;
        }
    },
    methods: {
        updateUserSettings: async function () {
            const docRef = doc(db, "users", this.uidState);

            await updateDoc(docRef, {
                "user_settings": this.userSettings
            });

            this.$store.dispatch('fetchUserSettings')
        },
        getCreateUrl(url) {
            window.open(`${url}`)
        },
        viewChange() {
            this.isShow = !this.isShow;
        }
    },

};

</script>

<style scoped>
.box {
    position: absolute;
    left: 50%;
    bottom: 90%;
    width: 50%;
    margin: 0 0 0 auto;
}

.icon_shortcut{
    width: 2rem;
}
.dropdown-toggle::after {
    display: none;
}

.btn-group {
    position: relative;
    right: 2rem;
    top: 2rem;
}

.btn-secondary {
    padding: 40%;
}

.btn-outline-light{
    font-size: 0.8rem;
    width: 5rem;
}
</style>

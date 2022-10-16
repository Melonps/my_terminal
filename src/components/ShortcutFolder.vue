<template>
    <div class="box">
        
        <div v-show="isShow">
            <div class="d-flex flex-wrap" >
                <div v-for="info of userSettingsState.shortcut" v-bind:key="info">
                    <div class="p-2 bd-highlight">
                        <button type="button" class="btn btn-outline-light" @click="getCreateUrl(info.url)">
                            <img v-bind:src="`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${info.url}https://ameblo.jp/staff/&size=64`" alt="test" class="icon_shortcut"/>
                            <div class=" text-truncate">
                                <p>{{info.title}}</p>
                            </div>
                        </button>
                        <div class="btn-group dropend">
                            <a class="btn btn-outline-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <font-awesome-icon icon="fa-solid fa-bars" />
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#" onclick="remove(info.id)">delete</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-outline-info" @click="viewChange()">
        <font-awesome-icon icon="fa-solid fa-house" />
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ショートカットの編集</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="text" v-model="new_title" class="form-control" placeholder="title" aria-label="title"
                            aria-describedby="basic-addon2">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text"  v-model="new_url" class="form-control" placeholder="url" aria-label="url" aria-describedby="basic-addon2">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="addShortcut(new_title, new_url),updateUserSettings">Save changes</button>
                </div>
            </div>
        </div>
    </div>
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
        get_shortcut_num: function () {
            return this.$store.state.get_num_shortcut;
        }
    },
    methods: {
        getCreateUrl(url) {
            window.open(`${url}`)
        },
        viewChange() {
            this.isShow = !this.isShow;
        },
        remove(id) {
            this.$store.commit('delete', id)
            this.$router.push('/')
        },
        addShortcut (new_title, new_url) {
            const obj = {};
            obj["title"] = new_title;
            obj["url"] = new_url;
            const new_id = this.$store.getters.get_num_shortcut;
            obj["id"] = new_id;
            console.log(obj);

        },
        updateUserSettings: async function () {
            const docRef = doc(db, "users", this.uidState);

            await updateDoc(docRef, {
                "user_settings": this.userSettings
            });

            this.$store.dispatch('fetchUserSettings')
        },
    },

};

</script>

<style scoped>
/*全体の場所*/
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

.btn-outline-primary {
    padding: 40%;
}

/*ショートカット表示、非表示切り替え*/
.btn-outline-light{
    font-size: 0.8rem;
    width: 5rem;
}

.btn-outline-info{
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>

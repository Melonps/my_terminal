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
                <label for="selectLocation" class="form-label">Location</label>
                <select id="selectLocation" class="form-select" aria-label="select location" v-model="userSettings.location">
                    <option disabled value="">都道府県を選択</option>
                    <option v-for="item in prefs" v-bind:key="item.id">{{item.name}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="imputBgImage" class="form-label">Background Image</label>
                <input v-model="userSettings.bg_image" v-bind:placeholder="userSettingsState.bg_image" type="url" class="form-control" id="imputBgImage">
            </div>
            <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary" v-on:click="updateUserSettings">
                    Update
                </button>
            </div>
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
            prefs: [
                { id: "1", name: "北海道" },
                { id: "2", name: "青森県" },
                { id: "3", name: "岩手県" },
                { id: "4", name: "宮城県" },
                { id: "5", name: "秋田県" },
                { id: "6", name: "山形県" },
                { id: "7", name: "福島県" },
                { id: "8", name: "茨城県" },
                { id: "9", name: "栃木県" },
                { id: "10", name: "群馬県" },
                { id: "11", name: "埼玉県" },
                { id: "12", name: "千葉県" },
                { id: "13", name: "東京都" },
                { id: "14", name: "神奈川県" },
                { id: "15", name: "新潟県" },
                { id: "16", name: "富山県" },
                { id: "17", name: "石川県" },
                { id: "18", name: "福井県" },
                { id: "19", name: "山梨県" },
                { id: "20", name: "長野県" },
                { id: "21", name: "岐阜県" },
                { id: "22", name: "静岡県" },
                { id: "23", name: "愛知県" },
                { id: "24", name: "三重県" },
                { id: "25", name: "滋賀県" },
                { id: "26", name: "京都府" },
                { id: "27", name: "大阪府" },
                { id: "28", name: "兵庫県" },
                { id: "29", name: "奈良県" },
                { id: "30", name: "和歌山県" },
                { id: "31", name: "鳥取県" },
                { id: "32", name: "島根県" },
                { id: "33", name: "岡山県" },
                { id: "34", name: "広島県" },
                { id: "35", name: "山口県" },
                { id: "36", name: "徳島県" },
                { id: "37", name: "香川県" },
                { id: "38", name: "愛媛県" },
                { id: "39", name: "高知県" },
                { id: "40", name: "福岡県" },
                { id: "41", name: "佐賀県" },
                { id: "42", name: "長崎県" },
                { id: "43", name: "熊本県" },
                { id: "44", name: "大分県" },
                { id: "45", name: "宮崎県" },
                { id: "46", name: "鹿児島県" },
                { id: "47", name: "沖縄県" },
            ],
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

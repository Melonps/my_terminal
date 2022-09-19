<template>
    <div class="whole">
        <div class="m-0">
            <div class="bg_blur">            
            <img v-if="userSettingsState.bg_image != 'default'" :src="userSettingsState.bg_image" alt="Custom Background Image" class="custom_bg_blur"/>
            <img v-else src="@/assets/img/default.jpg" alt="Default Background Image" class="default_bg_blur"/>
            </div>
            <div class="bg_main">
            <img v-if="userSettingsState.bg_image != 'default'" :src="userSettingsState.bg_image" alt="Custom Background Image" class="custom_bg"/>
            <img v-else src="@/assets/img/default.jpg" alt="Default Background Image" class="default_bg"/>
            </div>
                <div class="content">
                    <Maintext></Maintext>
                    <UserSettings></UserSettings>
                <div v-if="!signedin_state">
                    <SignOut></SignOut>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

import UserSettings from "../components/UserSettings.vue";
import SignOut from "./SignOut.vue";
import Maintext from "./Maintext.vue";


export default {
    name: "terminal",
    components: {
    UserSettings,
    SignOut,
    Maintext
},
    computed: {
        userSettingsState: function () {
            return this.$store.state.userSettings;
        },
    }
};

</script>

<style scoped>

    .m-0{
        position: relative;
    }
    /*背景画像の設定*/
    .m-0 img {
        width: 100%;
        height: 100%;
    }

    .bg_blur {
        margin: 0;

    }

    .bg_blur img{
        position: inherit;
        filter: blur(8px);
        overflow: hidden;
        width: 100%;

    }

    .bg_main {
        position: absolute;
        width: 94%;
        height: 94%;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
    }

    .bg_main::after {
    /* 疑似要素で同じ大きさのboxを作り、position: absoluteで背面に表示 */
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        /* ①疑似要素のボックスを影色で塗りつぶし */
        background-color: rgb(42, 159, 226);
        /* ②ブラーフィルターでぼかす */
        filter: blur(15px);
        /* ③位置やサイズを調整 */
        transform: translateY(10px) scale(1.05);
        /* ④乗算で重ねる */
        mix-blend-mode: hard-light;
    }

    .content{
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        margin: auto;
    }

</style>
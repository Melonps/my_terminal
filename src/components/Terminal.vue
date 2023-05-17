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
                    <GoogleSearch></GoogleSearch>
                    <Maintext></Maintext>
                    <UserSettings></UserSettings>
                    <ShortcutFolder></ShortcutFolder>
                <div v-if="$store.state.isSignedIn">
                    <SignOut></SignOut>
                </div>
                <div v-else>
                    <SignInWithGoogle></SignInWithGoogle>
                </div>
            </div>
            
        </div>
        </div>
        <!--
        <div >
            <div v-if="userSettingsState.bg_image == 'default'" class="defalutImage"></div>
            <div v-else class="backgroundImage bg_overlay" :style="{ 'background': `url(${userSettingsState.bg_image}) no-repeat 50%` }"></div>
        </div>
        -->

        <div class="content">
            <Maintext></Maintext>
            <UserSettings/>
        </div>
        
    </div>

</template>

<script>
    import UserSettings from "../components/UserSettings.vue";
    import Maintext from "./Maintext.vue";

import UserSettings from "../components/UserSettings.vue";
import SignOut from "./SignOut.vue";
import Maintext from "./Maintext.vue";
import SignInWithGoogle from "./SignInWithGoogle.vue";
import GoogleSearch from "./GoogleSearch.vue";
import ShortcutFolder from "./ShortcutFolder.vue";

export default {
    name: "terminal",
    components: {
    UserSettings,
    SignOut,
    Maintext,
    SignInWithGoogle,
    GoogleSearch,
    ShortcutFolder,
},
    computed: {
        userSettingsState: function () {
            return this.$store.state.userSettings;
        },
        computed: {
            userSettingsState: function () {
                return this.$store.state.userSettings;
            },
        }
    };
</script>

<style scoped>

    /*背景画像の設定*/

    .bg_blur {
        position: fixed;
        border: none;
        height: 100%;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: -99;
    }

    .content{
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        margin: auto;
    }
    .bg_main{
        position: fixed;
        width: 94vw;
        inset: 0;
        margin: auto;
        border-radius: 30px;
        
    }
    .bg_overlay{
        position: fixed;
        width: 94vw;
        inset: 0;
        margin: auto;
        border-radius: 30px;
        mix-blend-mode: overlay;
    }

    .backgroundImage {
        background-size:cover;  
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        justify-content: center;
        min-height: 100vh;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5); /* 薄い影 */

    }
    .defalutImage{
        background-size:cover;  
        background: url('../assets/img/default.jpg') no-repeat 50%;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        justify-content: center;
        min-height: 100vh;
    }
    .glass {
        width: 100vw;
        height: 100vh;
        z-index: -15;
        background-color: rgba(255, 255, 255, 0.1); /* 背景色 */
        border: 1px solid rgba(255, 255, 255, 0.4); /* ボーダー */
        border-right-color: rgba(255, 255, 255, 0.2);
        border-bottom-color: rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        -webkit-backdrop-filter: blur(16px); /* ぼかしエフェクト */
        backdrop-filter: blur(16px);
        box-shadow: 0 5px 20px rgba(255, 152, 79, 0.5); /* 薄い影 */
        
    }
</style>
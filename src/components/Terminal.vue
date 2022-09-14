<template>
    <div class="whole">
        <div class="m-0">
            <img v-if="userSettingsState.bg_image != 'default'" :src="userSettingsState.bg_image" alt="Custom Background Image" class="custom_bg"/>
            <img v-else src="@/assets/img/default.jpg" alt="Default Background Image" class="default_bg"/>
            <div class="content">
                <UserSettings></UserSettings>
                <Clock></Clock>
            </div>
        </div>
    </div>
</template>

<script>

import UserSettings from "../components/UserSettings.vue";
import Clock from "../components/Clock.vue";


export default {
    name: "terminal",
    components: {
        UserSettings,
        Clock,
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
        object-fit: cover;
    }

    .content{
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        margin: auto;
    }

</style>
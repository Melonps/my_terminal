<template>
    <div class="my_terminal">
        <div class="container">
            <img v-if="userSettingsState.bg_image != 'default'" :src="userSettingsState.bg_image" alt="Custom Background Image" class="custom_bg"/>
            <img v-else src="@/assets/img/default.jpg" alt="Default Background Image" class="default_bg"/>
        </div>
    <div class="container"></div>
        <Usersetting></Usersetting>
        <Clock></Clock>
    </div>
</template>

<script>

import Usersetting from "../components/UserSettings.vue";
import Clock from "../components/Clock.vue";


export default {
    name: "terminal",
    components: {
        Usersetting,
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

</style>
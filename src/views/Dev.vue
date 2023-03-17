<template>
    <div class="GoogleSearch">
        <GoogleSearch></GoogleSearch>
    </div>
    <div class="dev">
        <Terminal></Terminal>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Terminal from "@/components/Terminal.vue";
    import GoogleSearch from "../components/GoogleSearch.vue";

    export default {
        name: "my_terminal",

        created() {
            this.$store.commit('onAuth')
        },
        
        components: {
            Terminal,
            GoogleSearch
        },
    };
</script>

<style scoped>
    .GoogleSearch {
        z-index: 0;
    }
    .dev {
        z-index: 1;
    }
</style>
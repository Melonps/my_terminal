<template>
    <div class="dev">
        <Terminal></Terminal>
    </div>
</template>

<script>
// @ is an alias to /src
import Terminal from "@/components/Terminal.vue";

export default {
    name: "my_terminal",

    created() {
        this.$store.commit('onAuth')
    },
    
    components: {
        Terminal,
    },
};
</script>


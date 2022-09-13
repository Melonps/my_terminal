<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Weather></Weather>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Weather from "@/components/Weather.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

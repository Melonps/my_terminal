<template>
  <Header />
  <router-view />
  <UserSettings></UserSettings>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import UserSettings from "@/components/UserSettings.vue";

export default {
  components: {
    Header,
    Footer,
    UserSettings,
  },
};
</script>

<style>
#app {
  font-family: BEBAS, MOON, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2, h3, h4, h5, h6 {
  font-family:'BEBAS','MOON';
  text-align: center;
  color:black;
}

@font-face {
  font-family:'BEBAS';
  src:url('./assets/fonts/BebasNeue-Bold.ttf');
}
@font-face {
  font-family:'MOON';
  src:url('./assets/fonts/Moon2.0-Regular.otf');
}

img {
  image-rendering: -webkit-optimize-contrast;
}
</style>

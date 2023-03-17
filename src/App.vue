<template>
  <router-view />
</template>


<style>
#app {
  font-family: BEBAS, MOON, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: none;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  
}

h1, h2, h3, h4, h5, h6 {
  font-family:'BEBAS_reg','MOON';
  text-align: center;
  color:black;
}

@font-face {
  font-family:'BEBAS_reg';
  src:url('./assets/fonts/BebasNeue-Regular.ttf');
}
@font-face {
  font-family:'BEBAS_bld';
  src:url('./assets/fonts/BebasNeue-Bold.ttf');
}
@font-face {
  font-family:'MOON';
  src:url('./assets/fonts/Moon2.0-Regular.otf');
}

img {
  image-rendering: -webkit-optimize-contrast;
}

.contents_box::-webkit-scrollbar{
  display: none;
}
</style>

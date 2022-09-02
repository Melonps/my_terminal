<template>
  <div class="about">
    <h1>abouts</h1>
    <GoogleSearch></GoogleSearch>
  </div>
</template>

<script>

import GoogleSearch from "@/components/GoogleSearch.vue";

export default {
  name: "about",
  components: {
    GoogleSearch,
  },
};
</script>

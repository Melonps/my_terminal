<template>
  <div class="about">
    <h1>abouts</h1>
    <Clock></Clock>
    <Date></Date>
  </div>
</template>

<script>

import Clock from "@/components/Clock.vue";
import Date from "@/components/Date.vue";


export default {
  name: "about",
  components: {
    Clock,
    Date,
  },
};
</script>

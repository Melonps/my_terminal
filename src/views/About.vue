<template>
  <div class="about">
    <h1>abouts</h1>
    <h1>Firebase Authentication</h1>

    <div v-if="!signedin_state">
      <h2>Sign in with Google</h2>
      <SignInWithGoogle></SignInWithGoogle>
    </div>

    <div v-if="signedin_state">
      <h2>Sign out</h2>
      <SignOut></SignOut>
    </div>

    <h1>Firebase Firestore</h1>
    <Firestore></Firestore>
    <Clock></Clock>
    <Date></Date>
  </div>
</template>

<script>
import SignInWithGoogle from "../components/SignInWithGoogle.vue";
import SignOut from "../components/SignOut.vue";
import Firestore from "../components/Firestore.vue";

import Clock from "@/components/Clock.vue";
import Date from "@/components/Date.vue";

export default {
  name: "about",
  components: {
    SignInWithGoogle,
    SignOut,
    Firestore,
    Clock,
    Date,
  },
  created() {
    this.$store.dispatch('onAuth')
  },
  computed: {
    signedin_state() {
      return this.$store.state.isSignedIn
    },
  }
};
</script>
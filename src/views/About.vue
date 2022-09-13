<template>
  <div class="about">
    <h1>abouts</h1>
    <h1>Firebase Authentication</h1>
    <h2>Sign in with Google</h2>
    <SignInWithGoogle></SignInWithGoogle>
    <h2>Sign out</h2>
    <SignOut></SignOut>
    <h1>Firebase Firestore</h1>
    <Firestore></Firestore>
    <Clock></Clock>
    <Date></Date>
    <Weather></Weather>
  </div>
</template>

<script>
import SignInWithGoogle from "../components/SignInWithGoogle.vue";
import SignOut from "../components/SignOut.vue";
import Firestore from "../components/Firestore.vue";

import Clock from "@/components/Clock.vue";
import Date from "@/components/Date.vue";
import Weather from "@/components/Weather.vue";


export default {
  name: "about",
  components: {
    SignInWithGoogle,
    SignOut,
    Firestore,
    Clock,
    Date,
    Weather,
  },
};
</script>
<template>
  <div class="about">
    <h1>abouts</h1>
    <h1>Clock & Weather</h1>
    <h2>Clock</h2>
    <Clock></Clock>
    <Date></Date>
    <h2>Location</h2>
    <GetCurrentLocation></GetCurrentLocation>
    <SelectLocation></SelectLocation>
    <h2>Weather</h2>
    <Weather></Weather>
    <h1>Firebase Authentication</h1>
    <h2>Sign in with Google</h2>
    <SignInWithGoogle></SignInWithGoogle>
    <h2>Sign out</h2>
    <SignOut></SignOut>
    <h1>Firebase Firestore</h1>
    <Firestore></Firestore>
  </div>
</template>

<script>
  import SignInWithGoogle from "../components/SignInWithGoogle.vue";
  import SignOut from "../components/SignOut.vue";
  import Firestore from "../components/Firestore.vue";
  import SelectLocation from "../components/SelectLocation.vue";
  import GetCurrentLocation from "../components/GetCurrentLocation.vue";
  import Clock from "@/components/Clock.vue";
  import Date from "@/components/Date.vue";
  import Weather from "@/components/Weather.vue";

  export default {
    name: "about",
    components: {
      SignInWithGoogle,
      SignOut,
      Firestore,
      SelectLocation,
      GetCurrentLocation,
      Clock,
      Date,
      Weather,
    },
  };
</script>
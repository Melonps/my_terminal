<template>
  <div class="about">
    <h1>abouts</h1>
    <h1>Location</h1>
    <Location></Location>
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
  import Location from "../components/Location.vue";

  export default {
    name: "about",
    components: {
      SignInWithGoogle,
      SignOut,
      Firestore,
      Location
    },
  };
</script>
<template>
  <div class="about">
    <h1>abouts</h1>
    <h1>Sign in with Google</h1>
    <SignInWithGoogle></SignInWithGoogle>
    <h1>Sign out</h1>
    <SignOut></SignOut>
    <h1>User Settings</h1>
    <UserSettings></UserSettings>
  </div>
</template>
<script>
  import SignInWithGoogle from "../components/SignInWithGoogle.vue";
  import SignOut from "../components/SignOut.vue";
  import UserSettings from "../components/UserSettings.vue";

  export default {
    name: "about",
    components: {
      SignInWithGoogle,
      SignOut,
      UserSettings
    },
  };
</script>
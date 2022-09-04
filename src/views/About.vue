<template>
  <div class="about">
    <h1>abouts</h1>
    <h1>Sign up</h1>
    <AuthEmailRegister></AuthEmailRegister>
    <h1>Sign in</h1>
    <AuthEmailSignIn></AuthEmailSignIn>
    <h1>Google</h1>
    <AuthGoogle></AuthGoogle>
    <h1>Sign out</h1>
    <AuthSignOut></AuthSignOut>
  </div>
</template>
<script>
  import AuthEmailRegister from "@/components/AuthEmailRegister.vue";
  import AuthEmailSignIn from "../components/AuthEmailSignIn.vue";
  import AuthGoogle from "../components/AuthGoogle.vue";
  import AuthSignOut from "../components/AuthSignOut.vue";

  export default {
    name: "about",
    components: {
      AuthEmailRegister,
      AuthEmailSignIn,
      AuthSignOut,
      AuthGoogle
    },
  };
</script>
<template>
  <button type="button" class="btn btn-primary" v-on:click="signOut">Sign out</button>
</template>

<script>
  import { getAuth, signOut } from "firebase/auth";

  const auth = getAuth();

  export default {
    methods: {
      signOut() {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            console.log('サインアウト成功')
            alert('Succeeded to sign out')
          })
          .catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            alert(errorMessage)
          });
      }
    }
  };
</script>
<template>
  <button type="submit" class="btn btn-primary" v-on:click="initDocument">
    <span><font-awesome-icon icon="fa-brands fa-google" /></span>
    Sign in with Google
  </button>

  <p>{{uid}}</p>
</template>

<script>
  import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { auth } from './../plugins/firebase'

  const provider = new GoogleAuthProvider();

  export default {
    data: () => ({
      userName: '',
      uid: 'uid',
    }),
    methods: {
      google: async function() {
        await signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            //this.userName = user.displayName
            // ...
            //console.log(token)
            //console.log(user)
            this.uid = user.uid
            //console.log(this.uid);
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode)
            console.log(errorMessage)
            console.log(email)
            console.log(credential)
          })
          
      },
      initDocument: async function () {
        //最初にgoogle関数の実行を待つ
        await this.google();
        this.$store.dispatch('fetchUserSettings')
      },
    }
  };
</script>
<template>
  <button type="submit" class="btn btn-primary" v-on:click="google">
    <span><font-awesome-icon icon="fa-brands fa-google" /></span>
    Sign in with Google
  </button>
</template>

<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  import db from './../main'

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  export default {
    data: () => ({
      userName: '',
      uid: '',
    }),
    methods: {
      google: function() {
        signInWithPopup(auth, provider)
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
            console.log(this.uid)
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
          .then(() => {
            this.initDocument;
          });
      },
      initDocument: async function() {
        const docRef = doc(db, "users", this.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          await setDoc(docRef, {});
        }
      },
    }
  };
</script>
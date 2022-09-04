<template>
  <form>
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="email" id="inputEmail" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="inputPassword" class="form-label">Password</label>
      <input type="password" class="form-control" v-model="password" id="inputPassword">
    </div>
  </form>
  <button type="submit" class="btn btn-primary" v-on:click="signIn">Sign in</button>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  const auth = getAuth();

  export default {
    data: () => ({
      email: '',
      password: '',
    }),
    methods: {
      signIn() {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('サインイン成功！！')
            console.log(user)
          })
          .catch((error) => {
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
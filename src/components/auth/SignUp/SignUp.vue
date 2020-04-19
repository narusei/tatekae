<template>
  <section>
    <div
      style="height: 100vh; display: flex; flex-direction:column; justify-content:center; align-items:center;"
    >
      <div>Sign Up</div>
      <b-field>
        <b-input placeholder="Email" type="email" v-model="form.email"></b-input>
      </b-field>
      <b-field>
        <b-input type="password" placeholder="Password" password-reveal v-model="form.password"></b-input>
      </b-field>
      <p>
        Do you have an account?
        <router-link to="/signin">sign in now!!</router-link>
      </p>
      <b-field>
        <p class="control">
          <button class="button is-primary" @click="signUp()">Sign Up</button>
        </p>
      </b-field>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import firebase from "firebase";

@Component({
  components: {}
})
export default class SignUp extends Vue {
  // 1.@Prop
  // 2.property
  form: { email: string; password: string } = { email: "", password: "" };
  // 3.getter
  // 4.@Watch
  // 5.method
  signUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then(user => {
        alert("Create Account:" + user);
      })
      .catch(error => {
        alert(error.message);
      });
  }
}
</script>
<style lang="scss" scoped></style>

<template>
  <section>
    <div
      style="height: 100vh; display: flex; flex-direction:column; justify-content:center; align-items:center;"
    >
      <div>Sign In</div>
      <b-field>
        <b-input placeholder="Email" type="email" v-model="form.email"></b-input>
      </b-field>
      <b-field>
        <b-input type="password" placeholder="Password" password-reveal v-model="form.password"></b-input>
      </b-field>
      <b-field>
        <p class="control">
          <button class="button is-primary" @click="signIn()">Sign In</button>
        </p>
      </b-field>
      <p>
        You don't have an account?
        <router-link to="/signup">create account now!!</router-link>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import firebase from "firebase";

@Component({
  components: {}
})
export default class SignIn extends Vue {
  // 1.@Prop
  // 2.property
  form: { email: string; password: string } = { email: "", password: "" };
  // 3.getter
  // 4.@Watch
  // 5.method
  signIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(
        user => {
          alert("success!");
          this.$router.push("/");
        },
        err => {
          alert(err.message);
        }
      );
  }
}
</script>
<style lang="scss" scoped></style>

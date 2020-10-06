<template>
  <app-base>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>Tatekae</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <router-link :to="{ name: 'SignUp' }">
            <b-button class="button is-primary">SignUp</b-button>
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <router-link :to="{ name: 'SignIn' }">
            <b-button class="button is-primary" outlined>SignIn</b-button>
          </router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="sign-in">
        <div class="sign-in-header">Sign In</div>
        <b-field class="sign-in-input">
          <b-input
            placeholder="Email"
            type="email"
            v-model="form.email"
          ></b-input>
        </b-field>
        <b-field class="sign-in-input">
          <b-input
            type="password"
            placeholder="Password"
            password-reveal
            v-model="form.password"
          ></b-input>
        </b-field>
        <b-field>
          <p class="control">
            <button class="button is-primary" @click="signIn()">
              Sign In
            </button>
          </p>
        </b-field>
        <div class="sign-in-info">
          <div>
            You don't have an account?
          </div>
          <div>
            <router-link to="/signup">create account now!!</router-link>
          </div>
        </div>
      </div>
    </main-content>
  </app-base>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import AppBase from "@/components/common/AppBase";
import MainContent from "@/components/common/MainContent";

@Component({
  components: {
    AppBase,
    MainContent
  }
})
export default class SignInPage extends Vue {
  // 1.@Prop
  // 2.property
  form: { email: string; password: string } = { email: "", password: "" };
  // 3.getter
  // 4.@Watch
  // 5.method
  signIn() {
    this.$emit("signIn", this.form);
  }
}
</script>

<style lang="scss" scoped>
.sign-in-header {
  font-size: 24px;
  padding-bottom: 16px;
}

.sign-in {
  min-height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}

.sign-in-input {
  width: 70%;
}

.sign-in-info {
  text-align: center;
}
</style>

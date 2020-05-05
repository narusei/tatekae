<template>
  <app-base>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>Tatekae</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <router-link>
            <b-button class="button is-primary">SignUp</b-button>
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <router-link>
            <b-button class="button is-primary" outlined>SignIn</b-button>
          </router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="sign-up">
        <div class="sign-up-header">Sign Up</div>
        <b-field class="sign-up-input">
          <b-input
            type="Name"
            placeholder="UserName"
            v-model="form.name"
          ></b-input>
        </b-field>
        <b-field class="sign-up-input">
          <b-input
            placeholder="Email"
            type="email"
            v-model="form.email"
          ></b-input>
        </b-field>
        <b-field class="sign-up-input">
          <b-input
            type="password"
            placeholder="Password"
            password-reveal
            v-model="form.password"
          ></b-input>
        </b-field>
        <b-field>
          <p class="control">
            <button class="button is-primary" @click="signUp()">
              Sign Up
            </button>
          </p>
        </b-field>
        <div class="sign-up-info">
          <div>Do you have an account?</div>
          <div>
            <router-link to="/signin">sign in now!!</router-link>
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
    MainContent,
  },
})
export default class SignUpPage extends Vue {
  // 1.@Prop
  // 2.property
  form: { email: string; password: string; name: string } = {
    email: "",
    password: "",
    name: "",
  };
  // 3.getter
  // 4.@Watch
  // 5.method
  signUp() {
    this.$emit("signUp", this.form);
  }
}
</script>

<style lang="scss" scoped>
.sign-up-header {
  font-size: 24px;
  padding-bottom: 16px;
}

.sign-up {
  min-height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}

.sign-up-input {
  width: 70%;
}

.sign-up-info {
  text-align: center;
}
</style>

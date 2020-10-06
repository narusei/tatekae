<template>
  <app-base>
    <b-navbar class="is-mainColor">
      <template slot="brand">
        <b-navbar-item>Tatekae</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="a">
          <router-link :to="{ name: 'SignUp' }">
            SignUp
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="a">
          <router-link :to="{ name: 'SignIn' }">
            SignIn
          </router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="sign-in">
        <div class="sign-in-header">Sign In</div>
        <section>
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
          <b-field class="sign-in-button">
            <p class="control">
              <b-button class="is-mainColor is-inverted" @click="signIn()"
                >Sign In</b-button
              >
            </p>
          </b-field>
        </section>
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
.sign-in {
  min-height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sign-in-header {
  font-size: 36px;
  padding-top: 40%;
}

.sign-in-input {
  padding-top: 5%;
}

.sign-in-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
}

.sign-in-info {
  flex-grow: 1;
  padding-top: 5%;
  text-align: center;
}
</style>

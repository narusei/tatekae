<template>
  <sign-in-page @signIn="signIn($event)"></sign-in-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import firebase from "firebase";
import SignInPage from "@/components/auth/SignInPage";

@Component({
  components: {
    SignInPage
  }
})
export default class SignIn extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  signIn(form: { email: string; password: string }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(result => {
        this.$router.push("/");
      })
      .catch(error => {
        alert(error.message);
      });
  }
}
</script>
<style lang="scss" scoped>
</style>
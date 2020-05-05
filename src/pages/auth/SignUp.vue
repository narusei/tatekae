<template>
  <sign-up-page @signUp="signUp($event)"></sign-up-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import authApi from "@/api/auth";
import SignUpPage from "@/components/auth/SignUpPage";

@Component({
  components: {
    SignUpPage,
  },
})
export default class SignUp extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  async signUp(form: { email: string; password: string; name: string }) {
    try {
      const result = await authApi.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      if (result.user) {
        try {
          await authApi.createUser(result.user.uid, form.name);
          this.$router.push("/");
        } catch (error) {
          alert(error.message);
        }
      }
    } catch (error) {
      alert(error.message);
    }
  }
}
</script>
<style lang="scss" scoped></style>

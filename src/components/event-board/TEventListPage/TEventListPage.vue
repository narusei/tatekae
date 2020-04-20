<template>
  <div>
    <p>
      TEventListPage
    </p>
    <b-field>
      <p class="control">
        <button class="button is-primary" @click="signOut()">Sign Out</button>
      </p>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import firebase from "firebase";

@Component({
  components: {},
})
export default class NAME extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push("/signin");
      });
  }
}
</script>
<style lang="scss" scoped></style>

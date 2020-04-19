<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="display: flex; flex-direction:column; justify-content:center; align-items:center;">
      <b-field>
        <p class="control">
          <button class="button is-primary" @click="signOut()">Sign Out</button>
        </p>
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <button class="button" @click="onClick">
    {{ msg }}
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  @Prop({ default: "" })
  msg!: string;

  onClick() {
    this.$emit("click");
  }
}
</script>

<style scoped lang="scss">
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>

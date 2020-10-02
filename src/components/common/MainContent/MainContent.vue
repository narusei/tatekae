<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MainContent extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>

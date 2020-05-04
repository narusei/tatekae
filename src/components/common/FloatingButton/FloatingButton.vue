<template>
  <b-button
    class="floating-button"
    :icon-right="iconType"
    @click="onEmitClickEvent()"
  ></b-button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class FloatingButton extends Vue {
  // 1.@Prop
  @Prop({ default: "" })
  iconType!: string;
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  onEmitClickEvent() {
    this.$emit("click");
  }
}
</script>

<style lang="scss" scoped>
.floating-button {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 50%;
}
</style>

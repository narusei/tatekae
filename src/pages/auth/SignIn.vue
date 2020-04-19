<template>
  <sign-in></sign-in>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import SignIn from "@/components/auth/SignIn";
@Component({
  components: {
    SignIn
  }
})
export default class NAME extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
</style>
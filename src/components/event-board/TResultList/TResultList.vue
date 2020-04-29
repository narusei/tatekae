<template>
  <div>
    <p>TResultList</p>
    <div>test: {{ resultList }}</div>
    <div v-for="(result, index) in resultList" :key="index">
      <div>{{ result.from.name }}は{{ result.to.name }}へ{{ result.payment }}円払う</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { ResultItem } from "@/models/ResultItem";

@Component({
  components: {}
})
export default class TResultList extends Vue {
  // 1.@Prop
  @Prop({ default: () => [] })
  resultList!: ResultItem[];
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <main-content>
    <div v-for="(result, index) in resultList" :key="index">
      <div class="result-list-item">
        {{ result.from.name }} は {{ result.to.name }} へ
        {{ result.payment }} 円払う
      </div>
    </div>
  </main-content>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { ResultItem } from "@/models/ResultItem";
import MainContent from "@/components/common/MainContent";

@Component({
  components: {
    MainContent,
  },
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
.result-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  margin: 8px 16px;
  padding: 16px;
  border-radius: 5px;
}
</style>

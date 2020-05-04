<template>
  <div>
    <p>TBillDetailPage</p>
    <div>
      <router-link :to="{ name: 'EventDetail', params: { eventId: eventId } }">
        <button class="button is-primary">BackDetailPage</button>
      </router-link>
    </div>
    <div>test: {{ billDetail }}</div>
    <div>{{ billDetail.name }}</div>
    <div>{{ billDetail.billingPerson }}</div>
    <div>{{ billDetail.payer }}</div>
    <div>{{ billDetail.money }}</div>
    <button class="button is-danger" @click="onDeleteBill()">削除</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { BillItem } from "@/models/BillItem";

@Component({
  components: {},
})
export default class TBillDetailPage extends Vue {
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;

  @Prop({ default: () => ({}) })
  billDetail!: BillItem;
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  onDeleteBill() {
    this.$buefy.dialog.confirm({
      title: "請求書を削除",
      message: "一度請求書を削除したら元には戻せません。削除しますか？",
      confirmText: "削除",
      type: "is-danger",
      hasIcon: true,
      onConfirm: () => {
        this.$emit("deleteBill");
      },
    });
  }
}
</script>
<style lang="scss" scoped></style>

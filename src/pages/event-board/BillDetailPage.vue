<template>
  <div>
    <t-bill-detail-page
      @deleteBill="onDeleteBill($event)"
      :isLoaidng="loading"
      :eventId="eventId"
      :billDetail="billDetail"
    ></t-bill-detail-page>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import EventBoardStore from "@/store/event-board";
import TBillDetailPage from "@/components/event-board/TBillDetailPage";

@Component({
  components: {
    TBillDetailPage
  }
})
export default class BillDetailPage extends Vue {
  private eventBoardStore = getModule(EventBoardStore, this.$store);
  // 1.@Prop
  @Prop({ default: () => "" })
  eventId!: string;

  @Prop({ default: () => "" })
  billId!: string;
  // 2.property
  loading?: boolean = false;
  // 3.getter
  get billDetail() {
    return this.eventBoardStore.billDetail;
  }
  // 4.@Watch
  // 5.method
  async onDeleteBill() {
    try {
      this.loading = true;
      await this.eventBoardStore.deleteBill({
        eventId: this.eventId,
        billId: this.billId
      });
    } catch (error) {
      alert(error.message);
    } finally {
      this.$buefy.toast.open("請求書を削除しました");
      this.$router.push({
        name: "EventDetail",
        params: { eventId: this.eventId }
      });
      this.loading = false;
    }
  }

  async created() {
    try {
      this.loading = true;
      await this.eventBoardStore.getBillDetail({
        eventId: this.eventId,
        billId: this.billId
      });
    } catch {
      alert("get bill detail failed");
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <t-event-detail-page
      @addBill="onAddBill($event)"
      :eventDetail="eventDetail"
      :billList="billList"
    ></t-event-detail-page>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import EventBoardStore from "@/store/event-board";
import TEventDetailPage from "@/components/event-board/TEventDetailPage";
import { BillItem } from "@/models/BillItem";

@Component({
  components: {
    TEventDetailPage
  }
})
export default class EventDetailPage extends Vue {
  private eventBoardStore = getModule(EventBoardStore, this.$store);
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;
  // 2.property
  // 3.getter
  get eventDetail() {
    return this.eventBoardStore.eventDetail;
  }

  get billList() {
    return this.eventBoardStore.billList;
  }
  // 4.@Watch
  // 5.method
  onAddBill(billItem: BillItem) {
    try {
      const params = {
        eventId: this.eventId,
        billItem
      };
      this.eventBoardStore.addBill(params);
    } catch {
      alert("faild add bill");
    }
  }

  created() {
    try {
      this.eventBoardStore.getEventDetail(this.eventId);
    } catch {
      alert("faild get event detail");
    }
  }

  mounted() {
    this.eventBoardStore.startGetBillListListener(this.eventId);
  }

  destroyed() {
    this.eventBoardStore.stopGetBillListListener();
  }
}
</script>

<style lang="scss" scoped>
</style>
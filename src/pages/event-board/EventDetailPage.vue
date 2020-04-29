<template>
  <div>
    <t-event-detail-page
      @addBill="onAddBill($event)"
      :eventId="eventId"
      :eventDetail="eventDetail"
      :billList="billList"
      :memberList="memberList"
      :resultList="resultList"
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

  get memberList() {
    return this.eventBoardStore.memberList;
  }

  get resultList() {
    return this.eventBoardStore.resultList;
  }
  // 4.@Watch
  @Watch("billList")
  async reCaluculateResult() {
    await this.eventBoardStore.getResultList();
  }
  // 5.method
  async onAddBill(billItem: BillItem) {
    try {
      const params = {
        eventId: this.eventId,
        billItem
      };
      await this.eventBoardStore.addBill(params);
    } catch {
      alert("faild add bill");
    }
  }

  async created() {
    try {
      await this.eventBoardStore.getEventDetail(this.eventId);
      await this.eventBoardStore.getBillList(this.eventId);
      await this.eventBoardStore.getMemberList(this.eventId);
      await this.eventBoardStore.getResultList();
    } catch {
      alert("faild created");
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
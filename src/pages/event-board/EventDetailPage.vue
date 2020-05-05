<template>
  <div>
    <t-event-detail-page
      :isLoading="loading"
      :eventId="eventId"
      :eventDetail="eventDetail"
      :billList="billList"
      :resultList="resultList"
    ></t-event-detail-page>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import EventBoardStore from "@/store/event-board";
import TEventDetailPage from "@/components/event-board/TEventDetailPage";

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
  loading?: boolean = false;
  // 3.getter
  get eventDetail() {
    return this.eventBoardStore.eventDetail;
  }

  get billList() {
    return this.eventBoardStore.billList;
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
  async created() {
    try {
      this.loading = true;
      await this.eventBoardStore.getEventDetail(this.eventId);
      await this.eventBoardStore.getBillList(this.eventId);
      await this.eventBoardStore.getMemberList(this.eventId);
      await this.eventBoardStore.getResultList();
    } catch {
      alert("faild created");
    } finally {
      this.loading = false;
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

<style lang="scss" scoped></style>

<template>
  <div>
    <t-add-bill-page
      @addBill="onAddBill($event)"
      :eventId="eventId"
      :memberList="memberList"
    ></t-add-bill-page>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import EventBoardStore from "@/store/event-board";
import TAddBillPage from "@/components/event-board/TAddBillPage";
import { BillItem } from "@/models/BillItem";

@Component({
  components: {
    TAddBillPage,
  },
})
export default class AddBillPage extends Vue {
  private eventBoardStore = getModule(EventBoardStore, this.$store);
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;
  // 2.property
  // 3.getter
  get memberList() {
    return this.eventBoardStore.memberList;
  }
  // 4.@Watch
  // 5.method
  async onAddBill(billItem: BillItem) {
    try {
      const params = {
        eventId: this.eventId,
        billItem,
      };
      await this.eventBoardStore.addBill(params);
    } catch {
      alert("faild add bill");
    }
  }

  mounted() {
    this.eventBoardStore.startGetMemberListListener(this.eventId);
  }

  destroy() {
    this.eventBoardStore.stopGetMemberListListener();
  }
}
</script>

<style lang="scss" scoped></style>

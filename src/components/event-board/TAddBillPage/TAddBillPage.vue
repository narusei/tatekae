<template>
  <div>
    <p>TAddBillPage</p>
    <div>
      <router-link :to="{ name: 'EventDetail', params: { eventId: eventId } }">
        <button class="button is-primary">BackEventDetail</button>
      </router-link>
    </div>
    <t-bill-form
      @emitBillData="onAddBill($event)"
      :billFormText="'AddBill'"
      :memberList="memberList"
    ></t-bill-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import TBillForm from "@/components/event-board/TBillForm";
import { BillItem } from "@/models/BillItem";
import { MemberItem } from "@/models/MemberItem";

@Component({
  components: {
    TBillForm,
  },
})
export default class TAddBillPage extends Vue {
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;

  @Prop({ default: () => [] })
  memberList!: MemberItem[];
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  onAddBill(billItem: BillItem) {
    this.$emit("addBill", billItem);
  }
}
</script>

<style lang="scss" scoped></style>

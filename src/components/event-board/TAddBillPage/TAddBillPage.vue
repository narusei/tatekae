<template>
  <app-base>
    <b-navbar class="is-mainColor">
      <template slot="brand">
        <b-navbar-item tag="a">
          <router-link
            :to="{ name: 'EventDetail', params: { eventId: eventId } }"
          >
            <b-icon icon="chevron-left"></b-icon>
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="div">請求書新規作成</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="a" @click="signOut()">
          Sign Out
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="add-bill-header">請求書作成</div>
      <t-bill-form
        @emitBillData="onAddBill($event)"
        :billFormText="'新規作成'"
        :memberList="memberList"
      ></t-bill-form>
    </main-content>
  </app-base>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import TBillForm from "@/components/event-board/TBillForm";
import { BillItem } from "@/models/BillItem";
import { MemberItem } from "@/models/MemberItem";
import AppBase from "@/components/common/AppBase";
import MainContent from "@/components/common/MainContent";

@Component({
  components: {
    TBillForm,
    AppBase,
    MainContent
  }
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

<style lang="scss" scoped>
.add-bill-header {
  padding-top: 16px;
  padding-left: 16px;
}
</style>

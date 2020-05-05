<template>
  <app-base>
    <main-content>
      <div v-for="bill in billList" :key="bill.id">
        <router-link
          :to="{
            name: 'BillDetail',
            params: { eventId: eventId, billId: bill.id },
          }"
        >
          <div class="bill-list-item">
            <div class="bill-list-item-name">
              {{ bill.name }}
            </div>
            <div class="bill-list-item-sub-info">
              請求者: {{ bill.billingPerson }}
            </div>
          </div>
        </router-link>
      </div>
      <floating-button
        :iconType="'plus'"
        @click="toAddBillPage()"
      ></floating-button>
    </main-content>
  </app-base>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { BillItem } from "@/models/BillItem";
import AppBase from "@/components/common/AppBase";
import MainContent from "@/components/common/MainContent";
import FloatingButton from "@/components/common/FloatingButton";

@Component({
  components: {
    AppBase,
    MainContent,
    FloatingButton,
  },
})
export default class TBillList extends Vue {
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;

  @Prop({ default: () => [] })
  billList!: BillItem[];
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  toAddBillPage() {
    this.$router.push({
      name: "AddBill",
      params: { eventId: this.eventId },
    });
  }
}
</script>

<style lang="scss" scoped>
.bill-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  margin: 8px 16px;
  padding: 16px;
  border-radius: 5px;
}

.bill-list-item-name {
  margin-right: auto;
}

.bill-list-item-sub-info {
  color: gray;
  font-size: 13px;
}
</style>

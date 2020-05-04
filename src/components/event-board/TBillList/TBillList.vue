<template>
  <div>
    <p>TBillList</p>
    <div>
      <router-link
        :to="{
          name: 'AddBill',
          params: { eventId: eventId },
        }"
      >
        <button class="button is-primary">AddBill</button>
      </router-link>
    </div>
    <div>test: {{ billList }}</div>
    <div v-for="bill in billList" :key="bill.id">
      <div>{{ bill.name }}</div>
      <div>請求者: {{ bill.billingPerson }}</div>
      <div>被請求者: {{ bill.payer }}</div>
      <div>金額: {{ bill.money }}</div>
      <div>
        <router-link
          :to="{
            name: 'BillDetail',
            params: { eventId: eventId, billId: bill.id },
          }"
        >
          <button class="button is-primary">BillDetail</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { BillItem } from "@/models/BillItem";

@Component({
  components: {},
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
}
</script>

<style lang="scss" scoped></style>

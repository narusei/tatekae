<template>
  <div>
    <p>TEventDetailPage</p>
    <div>test: {{ eventDetail }}</div>
    <div>{{ eventDetail.name }}のページ</div>
    <b-field label="BillName">
      <b-input maxlength="20" type="textarea" v-model="name"></b-input>
    </b-field>
    <b-field label="BillingPerson(請求者)">
      <b-input maxlength="20" type="textarea" v-model="billingPerson"></b-input>
    </b-field>
    <b-field label="Payer(被請求者)">
      <b-input maxlength="20" type="textarea" v-model="payer"></b-input>
    </b-field>
    <b-field label="Money(請求金額)">
      <b-input maxlength="20" type="textarea" v-model="money"></b-input>
    </b-field>
    <b-field>
      <p class="control">
        <button class="button is-primary" @click="onAddBill()">AddBill</button>
      </p>
    </b-field>
    <div>test: {{ billList }}</div>
    <div v-for="bill in billList" :key="bill.id">
      <div>{{ bill.name }}</div>
      <div>請求者: {{ bill.billingPerson }}</div>
      <div>被請求者: {{ bill.payer }}</div>
      <div>金額: {{ bill.money }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { EventItem } from "@/models/EventItem";
import { BillItem } from "@/models/BillItem";

@Component({
  components: {}
})
export default class TEventDetailPage extends Vue {
  // 1.@Prop
  @Prop({ default: () => ({}) })
  eventDetail!: EventItem;

  @Prop({ default: () => [] })
  billList!: BillItem[];
  // 2.property
  name?: string = "";
  billingPerson?: string = "";
  payer?: string = "";
  money?: string = "";
  // 3.getter
  // 4.@Watch
  // 5.method
  onAddBill() {
    this.$emit("addBill", {
      name: this.name,
      billingPerson: this.billingPerson,
      payer: this.payer,
      money: this.money
    });
  }
}
</script>

<style lang="scss" scoped>
</style>
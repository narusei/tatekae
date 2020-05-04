<template>
  <div>
    <p>TBillForm</p>
    <b-field label="BillName">
      <b-input maxlength="20" type="textarea" v-model="name"></b-input>
    </b-field>
    <b-field label="BillingPerson(請求者)">
      <b-select placeholder="請求者を選択" required v-model="billingPerson">
        <option
          v-for="member in memberList"
          :value="member.name"
          :key="member.id"
          >{{ member.name }}</option
        >
      </b-select>
    </b-field>
    <b-field label="Payer(被請求者)">
      <b-select placeholder="被請求者を選択" required v-model="payer">
        <option
          v-for="member in payerData"
          :value="member.name"
          :key="member.id"
          >{{ member.name }}</option
        >
      </b-select>
    </b-field>
    <b-field label="Money(請求金額)">
      <b-input maxlength="20" type="textarea" v-model="money"></b-input>
    </b-field>
    <b-field>
      <p class="control">
        <button class="button is-primary" @click="onEmitBillData()">
          {{ billFormText }}
        </button>
      </p>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { MemberItem } from "@/models/MemberItem";

@Component({
  components: {},
})
export default class TBillForm extends Vue {
  // 1.@Prop
  @Prop({ default: "AddBill" })
  billFormText!: string;

  @Prop({ default: () => [] })
  memberList!: MemberItem[];
  // 2.property
  name?: string = "";
  billingPerson?: string = "";
  payer?: string = "";
  money?: string = "";
  // 3.getter
  get payerData() {
    const payerData: MemberItem[] = this.memberList.concat();
    payerData.push({
      id: "all",
      name: "ALL",
    });
    return payerData;
  }
  // 4.@Watch
  // 5.method
  onEmitBillData() {
    this.$emit("emitBillData", {
      name: this.name,
      billingPerson: this.billingPerson,
      payer: this.payer,
      money: this.money,
    });
  }
}
</script>

<style lang="scss" scoped></style>

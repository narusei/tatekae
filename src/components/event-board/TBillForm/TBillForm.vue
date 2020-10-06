<template>
  <main-content>
    <div class="bill-form-name">
      <b-field label="請求書名">
        <b-input type="text" v-model="name"></b-input>
      </b-field>
    </div>
    <div class="bill-form-member">
      <b-field label="請求者">
        <b-select placeholder="請求者を選択" required v-model="billingPerson">
          <option
            v-for="member in memberList"
            :value="member.name"
            :key="member.id"
            >{{ member.name }}</option
          >
        </b-select>
      </b-field>
      <div class="bill-form-member-arrow">
        →
      </div>
      <b-field label="被請求者">
        <b-select placeholder="被請求者を選択" required v-model="payer">
          <option
            v-for="member in payerData"
            :value="member.name"
            :key="member.id"
            >{{ member.name }}</option
          >
        </b-select>
      </b-field>
    </div>
    <div class="bill-form-money">
      <b-field label="請求金額(円)">
        <b-input type="number" min="0" v-model="money"></b-input>
      </b-field>
    </div>
    <div class="bill-form-add-button">
      <b-field>
        <p class="control">
          <b-button class="is-mainColor is-inverted" @click="onEmitBillData()">
            {{ billFormText }}
          </b-button>
        </p>
      </b-field>
    </div>
  </main-content>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { MemberItem } from "@/models/MemberItem";
import MainContent from "@/components/common/MainContent";

@Component({
  components: {
    MainContent
  }
})
export default class TBillForm extends Vue {
  // 1.@Prop
  @Prop({ default: "新規追加" })
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
      name: "ALL"
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
      money: this.money
    });
  }
}
</script>

<style lang="scss" scoped>
.bill-form-name {
  padding: 16px;
}

.bill-form-member {
  display: flex;
  justify-content: space-between;
  padding: 0 16px 16px;
}

.bill-form-member-arrow {
  display: flex;
  align-items: center;
}

.bill-form-money {
  padding: 0 16px 16px;
}

.bill-form-add-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

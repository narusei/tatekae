<template>
  <main-content>
    <div style="padding: 0 16px 16px;">
      <b-field label="請求書名">
        <b-input type="text" v-model="name"></b-input>
      </b-field>
    </div>
    <div
      style="display: flex; justify-content: space-between; padding: 0 16px 16px;"
    >
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
      <div style="display: flex; align-items: center;">→</div>
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
    <div style="padding: 0 16px 16px;">
      <b-field label="請求金額(円)">
        <b-input type="number" min="0" v-model="money"></b-input>
      </b-field>
    </div>
    <div style="display: flex; justify-content: center; align-items: center;">
      <b-field>
        <p class="control">
          <button class="button is-primary" @click="onEmitBillData()">
            {{ billFormText }}
          </button>
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
    MainContent,
  },
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

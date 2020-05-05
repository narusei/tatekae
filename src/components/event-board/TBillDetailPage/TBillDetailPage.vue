<template>
  <app-base>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>Tatekae</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <button class="button is-primary" @click="signOut()">
            Sign Out
          </button>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <router-link
            :to="{ name: 'EventDetail', params: { eventId: eventId } }"
          >
            <button class="button is-primary">BackDetailPage</button>
          </router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="bill-detail-header">請求書詳細</div>
      <div class="bill-detail-content">
        <div class="bill-detail-title">
          Tatekae Bill
        </div>
        <b-button
          class="bill-detail-delete"
          icon-right="delete"
          @click="onDeleteBill()"
        ></b-button>
        <div class="bill-detail-payer">請求先: {{ billDetail.payer }}</div>
        <div class="bill-detail-item">
          <div>
            {{ billDetail.name }}
          </div>
          <div>{{ billDetail.money }}円</div>
        </div>
        <div class="bill-detail-billing">
          請求者: {{ billDetail.billingPerson }}
        </div>
      </div>
    </main-content>
  </app-base>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { BillItem } from "@/models/BillItem";
import AppBase from "@/components/common/AppBase";
import MainContent from "@/components/common/MainContent";

@Component({
  components: {
    AppBase,
    MainContent,
  },
})
export default class TBillDetailPage extends Vue {
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;

  @Prop({ default: () => ({}) })
  billDetail!: BillItem;
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  onDeleteBill() {
    this.$buefy.dialog.confirm({
      title: "請求書を削除",
      message: "一度請求書を削除したら元には戻せません。削除しますか？",
      confirmText: "削除",
      type: "is-danger",
      hasIcon: true,
      onConfirm: () => {
        this.$emit("deleteBill");
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.bill-detail-header {
  padding: 0 0 8px 8px;
}

.bill-detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto 100px 100px;
  border: solid 1px;
  margin: 8px 16px;
  padding: 8px;
}

.bill-detail-title {
  grid-row: 1/2;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
}

.bill-detail-delete {
  grid-row: 1/2;
  grid-column: 3/4;
  border: none;
  justify-self: end;
  align-self: center;
}

.bill-detail-payer {
  grid-row: 2/3;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
}

.bill-detail-item {
  grid-row: 3/4;
  grid-column: 1/4;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px;
  align-self: end;
}

.bill-detail-billing {
  grid-row: 4/5;
  grid-column: 3/4;
  justify-self: end;
  align-self: start;
  padding-top: 8px;
}
</style>

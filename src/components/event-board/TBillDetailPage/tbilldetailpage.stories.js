import TBillDetailPage from "./TBillDetailPage.vue";

export default {
  title: "event-board/TBillDetailPage",
};

export const Default = () => ({
  components: { TBillDetailPage },
  props: {
    billDetail: {
      default: {
        id: "0",
        name: "1日目夕飯代金",
        billingPerson: "taro",
        payer: "ALL",
        money: 4718,
      },
    },
  },
  template: `<t-bill-detail-page :billDetail="billDetail"></t-bill-detail-page>`,
});

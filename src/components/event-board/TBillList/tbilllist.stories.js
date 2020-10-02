import TBillList from "./TBillList.vue";

export default {
  title: "event-board/TBillList",
};

export const Default = () => ({
  components: { TBillList },
  props: {
    billList: {
      default: [
        {
          id: "0",
          name: "1日目夕飯代金",
          billingPerson: "taro",
          payer: "ALL",
          money: 4718,
        },
        {
          id: "1",
          name: "レンタカー代",
          billingPerson: "ziro",
          payer: "ALL",
          money: 7252,
        },
        {
          id: "2",
          name: "2日目夕飯代",
          billingPerson: "saburo",
          payer: "ALL",
          money: 2717,
        },
        {
          id: "3",
          name: "お土産代",
          billingPerson: "ziro",
          payer: "saburo",
          money: 698,
        },
        {
          id: "4",
          name: "昼食代",
          billingPerson: "taro",
          payer: "ziro",
          money: 2576,
        },
        {
          id: "5",
          name: "飲み物代",
          billingPerson: "saburo",
          payer: "taro",
          money: 76,
        },
      ],
    },
  },
  template: `<t-bill-list :billList="billList"></t-bill-list>`,
});

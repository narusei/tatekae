import TEventDetailPage from "./TEventDetailPage.vue";

export default {
  title: "event-board/TEventDetailPage",
};

export const Default = () => ({
  components: { TEventDetailPage },
  props: {
    eventDetail: {
      default: {
        id: "0",
        name: "キャンプ",
      },
    },
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
    resultList: {
      default: [
        {
          from: {
            id: "1",
            name: "ziro",
          },
          to: {
            id: "0",
            name: "taro",
          },
          payment: 42,
        },
        {
          from: {
            id: "2",
            name: "saburo",
          },
          to: {
            id: "0",
            name: "taro",
          },
          payment: 1925,
        },
        {
          from: {
            id: "2",
            name: "saburo",
          },
          to: {
            id: "1",
            name: "ziro",
          },
          payment: 5233,
        },
      ],
    },
  },
  template: `<t-event-detail-page :eventDetail="eventDetail" :billList="billList" :resultList="resultList"></t-event-detail-page>`,
});

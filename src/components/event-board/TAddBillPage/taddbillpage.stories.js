import TAddBillPage from "./TAddBillPage.vue";

export default {
  title: "event-board/TAddBillPage",
};

export const Default = () => ({
  components: { TAddBillPage },
  props: {
    memberList: {
      default: [
        {
          id: "0",
          name: "taro",
        },
        {
          id: "1",
          name: "ziro",
        },
        {
          id: "2",
          name: "saburo",
        },
      ],
    },
  },
  template: `<t-add-bill-page :memberList="memberList"></t-add-bill-page>`,
});

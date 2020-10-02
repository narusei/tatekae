import TBillForm from "./TBillForm.vue";

export default {
  title: "event-board/TBillForm",
};

export const Default = () => ({
  components: { TBillForm },
  props: {
    billFormText: {
      default: "新規追加",
    },
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
  template: `<t-bill-form :billFormText="billFormText" :memberList="memberList"></t-bill-form>`,
});

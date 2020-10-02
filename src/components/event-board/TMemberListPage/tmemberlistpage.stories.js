import TMemberListPage from "./TMemberListPage.vue";

export default {
  title: "event-board/TMemberListPage",
};

export const Default = () => ({
  components: { TMemberListPage },
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
  template: `<t-member-list-page :memberList="memberList"></t-member-list-page>`,
});

import TEventListPage from "./TEventListPage.vue";

export default {
  title: "event-board/TEventListPage",
};

export const Default = () => ({
  components: { TEventListPage },
  props: {
    eventList: {
      default: [
        {
          id: "0",
          name: "宅飲み",
        },
        {
          id: "1",
          name: "持ち寄りパーティ",
        },
        {
          id: "2",
          name: "キャンプ",
        },
        // {
        //   id: "3",
        //   name: "キャンプ",
        // },
        // {
        //   id: "4",
        //   name: "キャンプ",
        // },
        // {
        //   id: "5",
        //   name: "キャンプ",
        // },
        // {
        //   id: "6",
        //   name: "キャンプ",
        // },
        // {
        //   id: "7",
        //   name: "キャンプ",
        // },
      ],
    },
  },
  template: `<t-event-list-page :eventList="eventList"></t-event-list-page>`,
});

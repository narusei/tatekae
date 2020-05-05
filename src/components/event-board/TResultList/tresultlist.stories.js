import TResultList from "./TResultList.vue";

export default {
  title: "event-board/TResultList",
};

export const Default = () => ({
  components: { TResultList },
  props: {
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
  template: `<t-result-list :resultList="resultList"></t-result-list>`,
});

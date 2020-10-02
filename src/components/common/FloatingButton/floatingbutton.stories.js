import FloatingButton from "./FloatingButton.vue";

export default {
  title: "common/FloatingButton",
};

export const Default = () => ({
  components: { FloatingButton },
  props: {
    iconType: {
      default: "plus",
    },
  },
  template: `<floating-button :iconType="iconType"></floating-button>`,
});

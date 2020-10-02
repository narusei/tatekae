import MyButton from "./MyButton.vue";

export default {
  title: "common/MyButton",
};

export const Default = () => ({
  components: { MyButton },
  template: `<MyButton msg="Welcome to Your Vue.js + TypeScript + Storybook App"/>`,
});

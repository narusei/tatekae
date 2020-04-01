import { storiesOf } from "@storybook/vue";

import MyButton from "./MyButton.vue";

storiesOf("MyButton", module).add("Default", () => ({
  components: { MyButton },
  template: `<MyButton msg="Welcome to Your Vue.js + TypeScript + Storybook App"/>`
}));

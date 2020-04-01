// If storie affect all, you add it on this file.
import { storiesOf } from "@storybook/vue";

import HelloWorld from "../components/HelloWorld.vue";

storiesOf("HelloWorld", module).add("Default", () => ({
  components: { HelloWorld },
  template: `<HelloWorld msg="Welcome to Your Vue.js + TypeScript + Storybook App"/>`
}));

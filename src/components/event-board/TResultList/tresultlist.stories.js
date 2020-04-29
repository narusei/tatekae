import { storiesOf } from "@storybook/vue";

import TResultList from "./TResultList.vue";

storiesOf("TResultList", module).add("Default", () => ({
  components: { TResultList },
  template: `<t-result-list></t-result-list>`,
}));

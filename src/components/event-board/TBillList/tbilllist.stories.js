import { storiesOf } from "@storybook/vue";

import TBillList from "./TBillList.vue";

storiesOf("TBillList", module).add("Default", () => ({
  components: { TBillList },
  template: `<t-bill-list></t-bill-list>`,
}));

import { storiesOf } from "@storybook/vue";

import TMemberListPage from "./TMemberListPage.vue";

storiesOf("TMemberListPage", module).add("Default", () => ({
  components: { TMemberListPage },
  template: `<t-member-list-page></t-member-list-page>`,
}));

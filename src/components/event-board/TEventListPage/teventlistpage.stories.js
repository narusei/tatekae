import { storiesOf } from "@storybook/vue";

import TEventListPage from "./TEventListPage.vue";

storiesOf("TEventListPage", module).add("Default", () => ({
  components: { TEventListPage },
  template: `<t-event-list-page></t-event-list-page>`,
}));

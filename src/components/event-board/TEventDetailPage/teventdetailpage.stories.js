import { storiesOf } from "@storybook/vue";

import TEventDetailPage from "./TEventDetailPage.vue";

storiesOf("TEventDetailPage", module).add("Default", () => ({
  components: { TEventDetailPage },
  template: `<t-event-detail-page></t-event-detail-page>`,
}));

import { storiesOf } from "@storybook/vue";

import SignUpPage from "./SignUpPage.vue";

storiesOf("SignUpPage", module).add("Default", () => ({
  components: { SignUpPage },
  template: `<sign-up-page></sign-up-page>`,
}));

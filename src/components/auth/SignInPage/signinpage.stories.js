import { storiesOf } from "@storybook/vue";

import SignInPage from "./SignInPage.vue";

storiesOf("SignInPage", module).add("Default", () => ({
  components: { SignInPage },
  template: `<sign-in-page></sign-in-page>`,
}));

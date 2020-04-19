import { storiesOf } from "@storybook/vue";

import SignIn from "./SignIn.vue";

storiesOf("SignIn", module).add("Default", () => ({
  components: { SignIn },
  template: `<sign-in></sign-in>`,
}));

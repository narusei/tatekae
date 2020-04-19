import { storiesOf } from "@storybook/vue";

import SignUp from "./SignUp.vue";

storiesOf("SignUp", module).add("Default", () => ({
  components: { SignUp },
  template: `<sign-up></sign-up>`
}));

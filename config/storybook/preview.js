import { addDecorator } from "@storybook/vue";
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

addDecorator(() => ({
  template: "<div><story/></div>",
}));

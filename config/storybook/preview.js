import { configure, addDecorator } from "@storybook/vue";
import Vue from "vue";
import Vuex from "vuex";
import Buefy from "buefy";
import "../../src/styles/custamize.scss";

Vue.use(Buefy);
Vue.use(Vuex);

addDecorator(() => ({
  template: "<div><story/></div>",
}));

configure(require.context("../../src", true, /\.stories\.js$/), module);

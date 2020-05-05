import Vue from "vue";
import Buefy from "buefy";
import "../src/styles/custamize.scss";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import { credentials } from "../credentials/firebase";

Vue.use(Buefy);

Vue.config.productionTip = false;

const config = {
  apiKey: credentials.API_KEY,
  authDomain: credentials.AUTH_DOMAIN,
  databaseURL: credentials.DATEBASE_URL,
  projectId: credentials.PROJECT_ID,
  storageBucket: credentials.STORAGE_BUCKET,
  messagingSenderId: credentials.MESSAGING_SENDER_ID,
  appId: credentials.APP_ID,
  measurementId: credentials.MEASUREMENT_ID,
};

firebase.initializeApp(config);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

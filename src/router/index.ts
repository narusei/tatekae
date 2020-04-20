import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import EventList from "../pages/event-board/EventList.vue";
import SignUp from "../pages/auth/SignUp.vue";
import SignIn from "../pages/auth/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "signin",
  },
  {
    path: "/",
    name: "EventList",
    component: EventList,
    meta: { requiresAuth: true },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next();
      } else {
        next({
          path: "/signin",
          query: { redirect: to.fullPath },
        });
      }
    });
  } else {
    next();
  }
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import EventListPage from "../pages/event-board/EventListPage.vue";
import EventDetailPage from "../pages/event-board/EventDetailPage.vue";
import BillDetailPage from "../pages/event-board/BillDetailPage.vue";
import MemberListPage from "../pages/event-board/MemberListPage.vue";
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
    component: EventListPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/event-detail/:eventId",
    name: "EventDetail",
    component: EventDetailPage,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/event-detail/:eventId/bill-detail/:billId",
    name: "BillDetail",
    component: BillDetailPage,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/event-detail/:eventId/member",
    name: "MemberList",
    component: MemberListPage,
    meta: { requiresAuth: true },
    props: true,
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

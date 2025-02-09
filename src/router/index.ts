import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import EventListPage from "../pages/event-board/EventListPage.vue";
import EventDetailPage from "../pages/event-board/EventDetailPage.vue";
import BillDetailPage from "../pages/event-board/BillDetailPage.vue";
import AddBillPage from "../pages/event-board/AddBillPage.vue";
import MemberListPage from "../pages/event-board/MemberListPage.vue";
import SignUp from "../pages/auth/SignUp.vue";
import SignIn from "../pages/auth/SignIn.vue";
import Landing from "../pages/Landing/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/landing",
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
    path: "/event-detail/:eventId/add-bill",
    name: "AddBill",
    component: AddBillPage,
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
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
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
        if (!localStorage.getItem("logged")) {
          localStorage.setItem("logged", "true");
        }
        next();
      } else {
        if (localStorage.getItem("logged")) {
          next({
            path: "/signin",
            query: { redirect: to.fullPath },
          });
        } else {
          next({
            path: "/landing",
            query: { redirect: to.fullPath },
          });
        }
      }
    });
  } else {
    next();
  }
});

export default router;

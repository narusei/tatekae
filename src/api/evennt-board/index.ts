import firebase from "firebase";
import { EventItem } from "@/models/EventItem";
import { BillItem } from "@/models/BillItem";
import { MemberItem } from "@/models/MemberItem";

export default {
  getEventList() {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .get();
  },

  addEvent(eventItem: EventItem) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .add({
        name: eventItem.name,
      });
  },

  getEventDetail(eventId: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .get();
  },

  getBillList(eventId: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .collection("bills")
      .get();
  },

  addBill(eventId: string, billItem: BillItem) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .collection("bills")
      .add({
        name: billItem.name,
        billingPerson: billItem.billingPerson,
        payer: billItem.payer,
        money: billItem.money,
      });
  },

  getMemberList(eventId: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .collection("members")
      .get();
  },

  addMember(eventId: string, memberItem: MemberItem) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .collection("members")
      .add({
        name: memberItem.name,
      });
  },

  // onSnapshot Listener
  getEventListReference() {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events");
  },

  getBillListReference(eventId: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .collection("bills");
  },

  getMemberListReference(eventId: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .collection("members");
  },
};

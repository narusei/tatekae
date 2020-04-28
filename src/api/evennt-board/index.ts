import firebase from "firebase";
import { EventItem } from "@/models/EventItem";
import { BillItem } from "@/models/BillItem";
import { MemberItem } from "@/models/MemberItem";

export default {
  getEventListSnapshot() {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events");
  },

  addEvent(eventItem: EventItem) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .add({
        name: eventItem.name,
      })
      .catch((error) => {
        alert(error.message);
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

  getBillListSnapshot(eventId: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .collection("bills");
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
      })
      .catch((error) => {
        alert(error.message);
      });
  },

  getMemberListSnapshot(eventId: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .doc(eventId)
      .collection("members");
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
      })
      .catch((error) => {
        alert(error.message);
      });
  },
};

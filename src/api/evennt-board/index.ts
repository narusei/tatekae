import firebase from "firebase";
import { BillItem } from "@/models/BillItem";

export default {
  getEventListSnapshot() {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events");
  },

  addEvent(eventName: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("events")
      .add({
        name: eventName,
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
};

import firebase from "firebase";

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
};

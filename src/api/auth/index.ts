import firebase from "firebase";

export default {
  signUpWithEmailAndPassword(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  createUser(uid: string, name: string) {
    return firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .set({
        name: name,
      });
  },

  signInWithEmailAndPassword(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  signOut() {
    return firebase.auth().signOut();
  },

  getAuthUid() {
    return firebase.auth().currentUser?.uid;
  },
};

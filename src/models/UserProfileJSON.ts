import firebase from "firebase/compat";
import DocumentReference = firebase.firestore.DocumentReference;

export default interface UserProfileJSON {
    email: string,
    ID: string,
    name: string,
    orgs: Array<DocumentReference>
}
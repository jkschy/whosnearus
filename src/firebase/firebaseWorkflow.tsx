import AuthWorkflow from "./authWorkflow";
import FirestoreWorkflow from "./firestoreWorkflow";

export default class firebaseWorkflow {
    public static authWorkflow: AuthWorkflow = new AuthWorkflow();
    public static firestoreWorkflow: FirestoreWorkflow = new FirestoreWorkflow();
}

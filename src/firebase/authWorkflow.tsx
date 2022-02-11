import firebase from "../firebase";
import firebaseWorkflow from "./firebaseWorkflow";
import userProfile from "../models/userProfile";

class AuthWorkflow {
    public userProfile: userProfile | null = null;

    async login(username: string, password: string): Promise<Boolean> {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const currentUser = await firebase.auth().signInWithEmailAndPassword(username, password);
        if (currentUser.user?.email) {
            this.userProfile = await firebaseWorkflow.firestoreWorkflow.getUserProfile(currentUser.user.email);
            return true;
        } else {
            return false;
        }
    }

    async signUp(username: string, password: string): Promise<Boolean> {
        const newUser = await firebase.auth().createUserWithEmailAndPassword(username, password);
        if (newUser.user?.email) {
            this.userProfile = new userProfile(newUser.user.email, '', newUser.user.uid, []);
            await firebaseWorkflow.firestoreWorkflow.createUserProfile(this.userProfile);
            return true;
        } else {
            return false;
        }
    }

    async logout() {
        this.userProfile = null;
        await firebase.auth().signOut();
    }
}

export default AuthWorkflow;

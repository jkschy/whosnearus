import firebase from "../firebase";
import firebaseWorkflow from "./firebaseWorkflow";
import userProfile from "../models/userProfile";

class AuthWorkflow {
    private _userProfile: userProfile | null = null;
    private userProfileCallbacks: Array<(value: userProfile) => void> = [];

    async login(username: string, password: string): Promise<Boolean> {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const currentUser = await firebase.auth().signInWithEmailAndPassword(username, password);
        if (currentUser.user?.email) {
            this._userProfile = await firebaseWorkflow.firestoreWorkflow.getUserProfile(currentUser.user.email);
            return true;
        } else {
            return false;
        }
    }

    async signUp(username: string, password: string): Promise<Boolean> {
        const newUser = await firebase.auth().createUserWithEmailAndPassword(username, password);
        if (newUser.user?.email) {
            this._userProfile = new userProfile(newUser.user.email, '', newUser.user.uid, []);
            await firebaseWorkflow.firestoreWorkflow.createUserProfile(this._userProfile);
            return true;
        } else {
            return false;
        }
    }

    async logout() {
        this._userProfile = null;
        await firebase.auth().signOut();
    }

    getUserProfile(): userProfile | null {
        if (this._userProfile) {
            return this._userProfile;
        } else {
            return null;
        }

    }

    set userProfile(profile: userProfile) {
        this._userProfile = profile;
    }
}

export default AuthWorkflow;

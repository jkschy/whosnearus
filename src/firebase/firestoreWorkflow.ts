import firebase from "../firebase";
import userProfile from "../models/userProfile";
import Org from "../models/Org";
import DocumentReference = firebase.firestore.DocumentReference;
import User = firebase.User;


class FirestoreWorkflow {

    /**
     *
     */
    async checkOrg(accessKey: string) {
        const org = await firebase.firestore().collection('access-keys').doc(accessKey).get();
        if (org) {
            const orgData = await org.data()?.org?.get();
            console.log(orgData?.data())
        }
    }

    async useAccessKey(accessKey: string) {

    }

    async getUserProfile(email?: string): Promise<userProfile> {
        const userRes = email ? email : firebase.auth().currentUser?.email
        const userProfiles = await firebase.firestore().collection('users').where('email', '==', userRes
        ).get();
        if (userProfiles.empty) {
            throw new Error(`User profile was not found for user ${email}`);
        }
        const currentProfile = userProfiles.docs[0].data();
        const parsedOrgs = await this.getOrgsData(currentProfile.orgs);
        const up = new userProfile(currentProfile.email, currentProfile.name, currentProfile.ID, parsedOrgs);
        return up
    }

    async createUserProfile(currentUser: userProfile) {
        await firebase.firestore().collection('users').add(currentUser.getUserJSON());
    }

    async getOrgsData(orgs: DocumentReference[]): Promise<Array<Org>> {
        const returnArray: Org[] = [];
        for (const org of orgs) {
            const firebaseRef = await org.get();
            if (firebaseRef.exists) {
                const orgData = firebaseRef.data();
                returnArray.push(new Org(orgData?.name, orgData?.numUsers, await this.getOwnerName(orgData?.owner), firebaseRef.id, orgData?.industry, orgData?.website));
            }
        }
        return returnArray;
    }

    async getOwnerName(user: DocumentReference): Promise<string> {
        const ownerUser = await user.get();
        if (ownerUser.exists) {
            return ownerUser ? ownerUser.data()?.name : 'Unknown';
        } else {
            return "N/A"
        }
    }
}

export default FirestoreWorkflow
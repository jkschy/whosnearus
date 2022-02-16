import firebase from "../firebase";
import userProfile from "./userProfile";
import OrgTableData from "../components/general/models/OrgTableData";
import DocumentReference = firebase.firestore.DocumentReference;

export default class Org {
    public name: string
    private readonly users: number
    private readonly owner: string
    public industry?: string
    private readonly website?: string
    private id: string;

    constructor(name: string, users: number, owner: string, id: string, industry?: string, website?: string) {
        this.name = name;
        this.users = users;
        this.owner = owner;
        this.id = id;
        this.industry = industry;
        this.website = website
    }

    getNumUsers(userProfile: userProfile) {
        if (userProfile.getOrgs().includes(this)) {
            return this.users;
        }
    }

    getOwner(userProfile: userProfile) {
        if (userProfile.getOrgs().includes(this)) {
            return this.users;
        }
    }

    getWebsite(userProfile: userProfile) {
        if (userProfile.getOrgs().includes(this)) {
            return this.website;
        }
    }

    buildTableEntry(): OrgTableData {
        return {
            key: this.id,
            name: this.name,
            users: this.users,
            owner: this.owner.toString(),
            industry: this.industry,
            website: this.website,
        }
    }

    docRef(): DocumentReference {
        return firebase.firestore().collection('orgs').doc(this.id);
    }
}
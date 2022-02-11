import UserProfileJSON from "./UserProfileJSON";
import Org from "./Org";

export default class userProfile {
    private readonly orgs: Array<Org>;
    private readonly ID: string;

    public email: string;
    public name: string;

    constructor(email: string, name: string, ID: string, orgs: Array<Org>) {
        this.email = email;
        this.name = name;
        this.orgs = orgs;
        this.ID = ID;
    }


    public getUserJSON(): UserProfileJSON {
        const orgReferences = this.orgs.map((org) => org.docRef());
        
        return {
            name: this.name,
            ID: this.ID,
            email: this.email,
            orgs: orgReferences,
        }
    }

    getOrgs() {
        return this.orgs;
    }
}

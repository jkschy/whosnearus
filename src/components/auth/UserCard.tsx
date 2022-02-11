import Navbar from "../navbar/Navbar";
import {useEffect, useState} from "react";
import firebaseWorkflow from "../../firebase/firebaseWorkflow";
import Table from "../general/Table";
import OrgTableData from "../general/models/OrgTableData";
import IColumn from "../general/models/IColumn";

const UserCard = () => {
    const [orgs, setOrgs] = useState<Array<OrgTableData>>([])

    useEffect(() => {
        const orgs = firebaseWorkflow.authWorkflow.userProfile?.getOrgs()
        console.log(firebaseWorkflow.authWorkflow.userProfile)
        if (orgs) {
            const orgData: OrgTableData[] = [];

            orgs.forEach((org) => {
                orgData.push(org.buildTableEntry());
            });

            setOrgs([...orgData]);
        }
    }, [firebaseWorkflow.authWorkflow.userProfile])

    const columns: IColumn[] = [];
    columns.push({key: 'org-name', title: 'Organization Name', dataIndex: 'name'})
    columns.push({key: 'org-users', title: 'Total Organization Users', dataIndex: 'users'})
    columns.push({key: 'org-owner', title: 'Org Owner', dataIndex: 'owner'})
    columns.push({key: 'org-industry', title: 'Organization Industry', dataIndex: 'industry'})
    columns.push({key: 'org-website', title: 'Organization Website', dataIndex: 'website'})

    console.log(orgs);

    return (
        <div>
            <Navbar openKey={["Account"]}>
                <Table data={orgs} columns={columns}/>
            </Navbar>
        </div>
    );
};

export default UserCard

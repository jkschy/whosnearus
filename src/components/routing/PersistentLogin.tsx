import {Navigate, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import AppContext from "../general/AppContext";
import userProfile from "../../models/userProfile";
import firebase from "../../firebase";
import firebaseWorkflow from "../../firebase/firebaseWorkflow";
import AuthCard from "../auth/AuthCard";

const PersistentLogin = () => {
    const path = useLocation().pathname;
    const myContext = useContext(AppContext);
    const [userProfile, setUserProfile] = useState<userProfile | null>(null);
    const [lookingForUser, setLookingForUser] = useState<boolean>(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user?.email) {
                firebaseWorkflow.firestoreWorkflow.getUserProfile(user.email).then((res) => {
                    setUserProfile(res);
                    firebaseWorkflow.authWorkflow.userProfile = res;
                    myContext.addNewRoute(path);
                });
            } else {
                myContext.addNewRoute('/', <AuthCard/>);
                setLookingForUser(false);
            }
        })
    }, [])

    return (
        <>
            {userProfile && (
                <Navigate to={path}/>
            )}
            {lookingForUser && (
                <h1>Loading ...</h1>
            )}
            {!lookingForUser && (
                <Navigate to={'/'}/>
            )}
        </>
    )
}

export default PersistentLogin;


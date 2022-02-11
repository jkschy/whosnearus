import {useEffect} from "react";
import firebaseWorkflow from "../../firebase/firebaseWorkflow";
import {Navigate} from "react-router-dom";

const Logout = () => {
    useEffect(() => {
        firebaseWorkflow.authWorkflow.logout();
    }, [])

    return (
        <Navigate to={'/'}/>
    );
}

export default Logout;
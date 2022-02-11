import {Card} from "antd";
import {useState} from "react";
import SignUpInside from "./SignUpInside";
import "../../styles/auth/SignIn.css";
import SignInInside from "./SignInInside";

const tabList: ITabList[] = [
    {
        tab: "Sign in",
        key: "signIn",
        element: <SignInInside/>
    },
    {
        tab: "Sign up",
        key: "signUp",
        element: <SignUpInside/>
    }
];

const AuthCard = (props: PropTypes) => {
    const startingKey = props.signUp ? tabList[1] : tabList[0];
    const [activeAuthKey, setActiveAuthKey] = useState(startingKey);

    const onAuthKeyChange = (key: ITabList) => {
        setActiveAuthKey(key);
    };

    return (
        <div className="card">
            <Card
                style={{width: "50%"}}
                title="Login or Sign Up"
                tabList={tabList}
                activeTabKey={activeAuthKey?.key}
                onTabChange={(key) => {
                    const tab = tabList.find(tab => tab.key === key)
                    onAuthKeyChange(tab ? tab : tabList[0]);
                }}>
                {activeAuthKey.element}
            </Card>
        </div>
    );
};

interface PropTypes {
    signUp?: boolean,
}

interface ITabList {
    key: string,
    tab: string,
    element: JSX.Element,
}

export default AuthCard;

import Input, {InputTypes} from "../general/Input";
import "../../styles/auth/SignUpInside.css";
import Button from "../general/Button";
import firebaseWorkflow from "../../firebase/firebaseWorkflow";
import {notification} from "antd";
import {useState} from "react";

class signUpUser {
    public username = "";
    private password = "";

    setPassword(password: string) {
        this.password = password;
    }

    public checkPasswords(secondPass: string): boolean {
        return this.password === secondPass;
    }

    public async signUp(): Promise<void> {
        await firebaseWorkflow.authWorkflow.signUp(this.username, this.password);
    }
}

const inputUser = new signUpUser();

const SignUpInside = () => {
    const [badPasswords, setBadPasswords] = useState(false);

    const updateUsername = (text: string) => {
        inputUser.username = text;
    };

    const updatePassword = (text: string) => {
        inputUser.setPassword(text);
    };

    const checkPassword = (text: string) => {
        setBadPasswords(!inputUser.checkPasswords(text));
    };

    const trySignUp = async () => {
        try {
            await inputUser.signUp();
        } catch (e) {
            notification.open({
                message: "Error occurred during the Creation of new User",
                description: "Please try again, and contact us if the issue persists."
            });
        }
    };

    return (
        <div className="signUp">
            <Input
                type={InputTypes.username}
                placeHolder="Username"
                onChange={(e) => updateUsername(e.target.value)}
            />
            <Input
                type={InputTypes.password}
                placeHolder="Enter Password"
                onChange={(e) => updatePassword(e.target.value)}
                error={badPasswords}
            />
            <Input
                type={InputTypes.password}
                placeHolder="Retype Password"
                onChange={(e) => {
                    checkPassword(e.target.value)
                }}
                error={badPasswords}
            />
            <Input type={InputTypes.accessKey} placeHolder="Access Key" onChange={async (e) => {
                await firebaseWorkflow.firestoreWorkflow.checkOrg(e.target.value);
            }}/>
            <Button onClick={trySignUp}>Sign Up!</Button>
        </div>
    );
};

export default SignUpInside;

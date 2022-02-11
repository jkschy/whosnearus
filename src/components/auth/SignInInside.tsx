import {useContext, useState} from "react";
import Input, {InputTypes} from "../general/Input";
import "../../styles/auth/SignInInside.css";
import Button from "../general/Button";
import CheckBox from "../general/CheckBox";
import firebaseWorkflow from "../../firebase/firebaseWorkflow";
import AppContext from "../general/AppContext";
import {useNavigate} from "react-router-dom";
import HomePage from "../home/HomePage";

/**
 * Tracks the current User inside the sign in component
 */
class signInUser {
    public username: string = "";
    private password: string = "";
    public rememberStatus = false;

    /**
     * Sets the password of the current signInUSer
     */
    public set Password(password: string) {
        this.password = password;
    }

    /**
     * Signs the current user in
     * @throws if the use fails to authenticate
     */
    public async signIn(): Promise<void> {
        await firebaseWorkflow.authWorkflow.login(this.username, this.password);
    }
}

//CREATES GLOBAL `signInUser` OBJECT
const inputUser = new signInUser();

const SignInInside = () => {
    const [badLogin, setBadLogin] = useState(false);
    const myContext = useContext(AppContext);
    const navigator = useNavigate();


    /**
     * Updates the username inside the user
     * @param text
     */
    const updateUsername = (text: string) => {
        inputUser.username = text;
        setBadLogin(false);
    };

    /**
     * updates the password inside the user
     * @param password
     */
    const updatePassword = (password: string) => {
        inputUser.Password = password;
        setBadLogin(false);
    };

    /**
     * Updates the current remember status
     */
    const updateRememberStatus = () => {
        inputUser.rememberStatus = !inputUser.rememberStatus;
    };

    const TrySignIn = async () => {
        console.log(inputUser);
        try {
            await inputUser.signIn();
            myContext.addNewRoute('/navbar', <HomePage/>)
            navigator('/navbar');
        } catch (e) {
            setBadLogin(true);
        }
    };

    return (
        <div className="signIn">
            <p className={`badSignIn ${badLogin ? `show` : ``}`}>Invalid Username or Password</p>
            <Input type={InputTypes.username} placeHolder="Username" onChange={(e) => updateUsername(e.target.value)}/>
            <Input type={InputTypes.password} placeHolder="Password" onChange={(e) => updatePassword(e.target.value)}/>
            <CheckBox right label="Remember Me?" onChange={updateRememberStatus}/>
            <Button onClick={async () => {
                await TrySignIn()
            }}>
                Sign In
            </Button>
        </div>
    );
};

export default SignInInside;

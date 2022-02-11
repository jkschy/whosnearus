import {Input as AntInput} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, KeyOutlined, LockOutlined, UserOutlined} from "@ant-design/icons";
import {ChangeEventHandler} from "react";

enum InputTypes {
    username = "username",
    password = "password",
    accessKey = "accessKey"
}

const Input = (props: propTypes) => {
    return (
        <div>
            {props.type === InputTypes.username && (
                <AntInput
                    style={props.error ? {borderColor: "red"} : {}}
                    size="large"
                    placeholder={props.placeHolder}
                    type={props.type}
                    prefix={<UserOutlined/>}
                    onChange={props?.onChange}
                />
            )}
            {props.type === InputTypes.password && (
                <AntInput.Password
                    style={props.error ? {borderColor: "red"} : {}}
                    prefix={<LockOutlined/>}
                    placeholder={props.placeHolder}
                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                    onChange={props?.onChange}
                    size="large"
                />
            )}
            {props.type === InputTypes.accessKey && (
                <AntInput
                    style={props.error ? {borderColor: "red"} : {}}
                    size="large"
                    placeholder={props.placeHolder}
                    type={props.type}
                    prefix={<KeyOutlined/>}
                    onChange={props?.onChange}
                />
            )}
        </div>
    );
};

interface propTypes {
    type: InputTypes;
    placeHolder: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    error?: boolean;
}

export default Input;
export {InputTypes};

import {Button as AntButton} from "antd";
import {MouseEventHandler} from "react";

const Button = (props: PropTypes) => {
    return <AntButton className={props?.className} onClick={props?.onClick}> {props.children} </AntButton>;
};

interface PropTypes {
    children: string | JSX.Element;
    onClick?: MouseEventHandler<HTMLElement>;
    className?: string;
}

export default Button;

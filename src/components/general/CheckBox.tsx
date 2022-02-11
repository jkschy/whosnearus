import { Checkbox as AntBox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
import "../../styles/general/CheckBox.css";

const CheckBox = (props: PropTypes) => {
    return (
        <AntBox className={props.right ? "right" : ""} onChange={props?.onChange}>
            {props.label}
        </AntBox>
    );
};

interface PropTypes {
    label: string;
    onChange?: (e: CheckboxChangeEvent) => void;
    right: boolean;
}

export default CheckBox;

import IColumn from "./models/IColumn";
import {Table as AntTable} from "antd";

const Table = (props: PropTypes) => {
    return (
        <AntTable columns={props.columns} dataSource={props.data}/>
    )
}

interface PropTypes {
    data: Array<object>
    columns: Array<IColumn>
}

export default Table


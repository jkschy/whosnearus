export default interface IColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (text: string) => JSX.Element
}
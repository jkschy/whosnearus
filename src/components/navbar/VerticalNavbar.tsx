import React, {useState} from "react";
import "../../styles/navbar/VerticalNavbar.css";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {
    CompassOutlined,
    EditOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingFilled,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import Button from "../general/Button";

const {SubMenu} = Menu;

const VerticalNavbar = (props: PropTypes) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className={`navbarContainer ${!collapsed ? 'collapsed' : ''}`}>
            <Menu defaultSelectedKeys={props.openKey}
                  mode={"inline"}
                  theme={"dark"}
                  className={'navbar'}
                  inlineCollapsed={!collapsed}>
                <Menu.Item key={"icon"} icon={''}>
                    <Link to={'/home'}>ICON TO BE ADDED</Link>
                </Menu.Item>
                <Menu.Item key={"Home"} icon={<CompassOutlined/>}>
                    <Link to={'/home'}>Home</Link>
                </Menu.Item>
                <Menu.Item key={"Orgs"} icon={<TeamOutlined/>}>
                    My Teams
                </Menu.Item>
                <Menu.Item key={"Account"} icon={<UserOutlined/>}>
                    <Link to={'/user'}>Account</Link>
                </Menu.Item>
                {/*SUB-MENU*/}
                <SubMenu key={"Options"} icon={<SettingFilled/>} title="Settings">
                    <Menu.Item key={"Change Mode"} icon={<EditOutlined/>}>
                        Change Mode (Dark/Light)
                    </Menu.Item>
                    <Menu.Item key={"Logout"} icon={<LogoutOutlined/>}>
                        <Link to={'/Logout'}>Logout</Link>
                    </Menu.Item>
                </SubMenu>
                <Button onClick={() => setCollapsed(!collapsed)} className='collapse'>
                    {collapsed ? <MenuFoldOutlined/> : <MenuUnfoldOutlined/>}
                </Button>
            </Menu>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

interface PropTypes {
    openKey?: Array<string>,
    children?: string | JSX.Element,

}

export default VerticalNavbar;
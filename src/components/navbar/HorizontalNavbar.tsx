import {Menu} from "antd";
import {
    CompassOutlined,
    EditOutlined,
    LogoutOutlined,
    SettingFilled,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import React from "react";
import "../../styles/navbar/HorizontalNavbar.css"

const {SubMenu} = Menu;


const HorizontalNavbar = (props: PropTypes) => {
    return (
        <div className="navbarFlex">
            <Menu defaultSelectedKeys={props.openKey}
                  mode={"horizontal"}
                  theme={"dark"}
                  inlineCollapsed={true}
                  className="horizNavbar">
                <Menu.Item key={"Home"} icon={<CompassOutlined/>}>
                    <Link to={'/home'} className='smallLink'/>
                </Menu.Item>
                <Menu.Item key={"Orgs"} icon={<TeamOutlined/>}/>
                <Menu.Item key={"Account"} icon={<UserOutlined/>}>
                    <Link to={'/user'}/>
                </Menu.Item>
                {/*SUB-MENU*/}
                <SubMenu key={"Options"} icon={<SettingFilled/>}>
                    <Menu.Item key={"Change Mode"} icon={<EditOutlined/>} className='withTitle'>
                        Change Mode (Dark/Light)
                    </Menu.Item>
                    <Menu.Item key={"Logout"} icon={<LogoutOutlined/>} className='withTitle'>
                        <Link to={'/Logout'}>Logout</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}


interface PropTypes {
    openKey?: Array<string>,
    children?: string | JSX.Element,
}

export default HorizontalNavbar;
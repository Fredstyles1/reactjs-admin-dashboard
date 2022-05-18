import React from "react";
import "./Sidebar.css";



const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={require('../../assest/avatar.png')} alt="avatar" style={{ height: '35px', width: '35px' }}/>
                    <h1>Admin</h1>
                    <i className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}></i>
                </div>
                <div className="sidebar__menu">
                    <div className="sidebar__link">
                        <i className="fa fa-user-secret"></i>
                        <a href="#">Admin</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-building-o"></i>
                        <a href="#">Company</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-wrench"></i>
                        <a href="#">Employee</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-archive"></i>
                        <a href="#">Warehouse</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-handshake-o"></i>
                        <a href="#">Contract</a>
                    </div>
                    <div className="sidebar__logout">
                        <i className="fa fa-power-off"></i>
                        <a href="#">Log out</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar; 
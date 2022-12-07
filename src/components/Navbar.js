import React from "react";
import Sidebar from "./Sidebar";
export default function Navbar(props){
    return (
        <nav className="navbar-container">
            <div className="darkMode-switch" onClick={props.toggleDarkMode}>
                <span className="light-mode">Light</span>
                <div className="button-change">
                    <div className={"circle-left " + (props.darkMode ? "dark" : "")}></div>
                    <div className={"circle-right " + (props.darkMode ? "" : "dark")}></div>
                </div>
                <span className="dark-mode">Dark</span>
            </div>
            <div className="title-container">
                <h1 className="title-pizza">Pizza</h1>
            </div>
            <div className="menu-container">
                <p className="title-menu">Menu</p>
                <i className="fa-solid fa-pizza-slice fa-lg"></i>
                {/* <img src="logo-menu.png"></img> */}
            </div>
        </nav>
    )
}
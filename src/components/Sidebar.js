import React from "react";

export default function Sidebar(props){
    return (
        // <aside className="hidden"> onClick={props.toggleShowSidebar}
        // <aside className={props.showSidebar ? "" : "hidden"}>
        <aside className={"sidebar-container " + (props.showSidebar ? "" : "hidden")}>
            <div className="close-button" onClick={props.toggleShowSidebar}><span>X</span></div>
            <div className="redirect-container">
                <a href="#redirect-pizzas">Pizzas</a>
                <a href="#redirect-desserts">Desserts</a>
                <button className="button-place-order">Order Now</button>
            </div>
        </aside>
    )
}
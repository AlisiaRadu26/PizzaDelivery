import React from "react";

export default function Title(props){
    return (
        <div className={"title-container " + (props.darkMode ? "dark" : "")}>
            <h1 className="title-favorite">{props.text}</h1>
        </div>
    )
}
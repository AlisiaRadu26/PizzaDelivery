import React from "react";

export default function Footer(props){
    return (
        <div className={"footer-container " + (props.darkMode ? "dark" : "")}>
            <span>Pizza</span>
            <div className="icons-container">
                <i className="fa-brands fa-facebook fa-lg"></i>
                <i className="fa-brands fa-instagram fa-lg"></i>
                <i className="fa-brands fa-youtube fa-lg"></i>
                <i className="fa-brands fa-twitter fa-lg"></i>
                <i className="fa-brands fa-linkedin-in fa-lg"></i>
            </div>
        </div>
    )
}
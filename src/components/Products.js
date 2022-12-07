import React from "react";

export default function Products(props){
    return (
        <section className={"pizza-container " + (props.darkMode ? "dark" : "")}>
            <img className="pizza-image" src={props.img} alt={props.alt}></img>
            <span className="pizza-name">{props.name}</span>
            <p className="pizza-info">{props.info}</p>
            <span className="pizza-price">{props.price}</span>
            <button className="add-to-cart-pizza">{props.button}</button>
        </section>
    )
}
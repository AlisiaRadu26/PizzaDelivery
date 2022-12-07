import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./style-components.css"
import "./index.css"
import React from "react";
import Products from "./components/Products";
import Data from "./data/data-products";
import Sweets from "./data/data-desserts";
import Title from "./components/Title";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  const [darkMode, setDarkMode]=React.useState(false)
    function switchDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    const [showSidebar, setshowSidebar]=React.useState(true)
      function toggleShowSidebar(){
        setshowSidebar(prevshowSidebar => !prevshowSidebar)
    }

    console.log(showSidebar)

  const pizzaData = Data.map(data => {
    return <Products 
        darkMode = {darkMode}
        key={data.key}
        // productsData={data}
        img = {data.img}
        alt = {data.alt}
        name = {data.name}
        info = {data.info}
        price = {data.price}
        button = {data.button}
    />
  })

  const sweetsData = Sweets.map(data => {
    return <Products 
        darkMode = {darkMode}
        key={data.key}
        // productsData={data}
        img = {data.img}
        alt = {data.alt}
        name = {data.name}
        info = {data.info}
        price = {data.price}
        button = {data.button}
    />
  })
  
  return (
    <div className={"App " + (darkMode ? "dark" : "")} >
      <header className="App-header">
        <Navbar darkMode = {darkMode}
        toggleDarkMode = {switchDarkMode} 
        />
        <Hero darkMode = {darkMode}/>
        <Sidebar showSidebar ={showSidebar}
        toggleShowSidebar = {toggleShowSidebar}
        />
        {/* <Sidebar /> */}
      </header>
      <Title 
        darkMode = {darkMode}
        text = "Choose your favorite pizza"/>
      <article className={"products-list " + (darkMode ? "dark" : "")} id="redirect-pizzas">
        {pizzaData}
      </article>
      <Section />
      <Title 
        darkMode = {darkMode}
        text = "Sweet treats for you"/>
      <article className={"products-list " + (darkMode ? "dark" : "")} id="redirect-desserts">
        {sweetsData}
      </article>
      <Footer 
        darkMode = {darkMode}/>
    </div>
  );
}

export default App;

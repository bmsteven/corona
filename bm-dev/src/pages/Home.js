import React from 'react'

//style
import "../styles/style.css"

//components
import Header from "../components/Header"
import Main from "../components/Main"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div id="home" className="home">
            <Header/>
            <Main/>
            <Contact/>
            <Footer/>
        </div>
    )
}

import React from 'react'
import './App.css'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const App = ()=>{
    return(
        <>
            <Navbar/>
             <Home/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
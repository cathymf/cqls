import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

import "normalize.css"
import '../assets/css/main.css'

const Layout = ({children}) => {
    return (
        <>
           <Header/>
           <Navbar />
           {children}
           <Footer /> 
        </>
    )
}

export default Layout

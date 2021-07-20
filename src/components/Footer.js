import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="page-footer">
            <div><BiPhoneCall />  <span className="bold"> 214-560-8823 / 720-510-1117</span> <span> </span><AiOutlineMail /> <span className="bold">  coneyqls@gmail.com</span></div>
            
            <div>&copy; {new Date().getFullYear()} <span>CQLS.</span> Built with Gatsby, created by cmf</div>
        </footer>
    )
}

export default Footer

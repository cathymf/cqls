import React from 'react'
import Layout from '../components/Layout'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from "react-icons/ai"

const contactus = () => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h2>Talk to us!</h2>
                        <p><BiPhoneCall />  <span className="bold"> 214-560-8823 / 720-510-1117</span> </p>
                        <p><AiOutlineMail /> <span className="bold">  coneyqls@gmail.com</span></p>
                        <p>Service request? Comments? Questions</p>
                        <p>Fill out the form and we will get back to you.</p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="phone">phone number</label>
                                <input type="text" name="phone" id="phone" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn block">submit</button>

                        </form>
                    </article>
                </section>
            </main>
        </Layout>
    )
}

export default contactus

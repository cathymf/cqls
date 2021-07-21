import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { GiHighGrass } from 'react-icons/gi'

const About = () => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                    <h2>About Us</h2>
                    <p><span><GiHighGrass /> </span>I am just a young man, trying to use my passion for the outdoors into a profession I enjoy.
                    I place a high value in providing good quality customer service. At the end of each project,  I provide
                    the client with a customer service form, where they can tell me of areas that need improvement for my 
                    return visit.

                    </p>
                    <p></p>
                    </article>
                    <StaticImage src="../assets/images/IMG_203.jpg" alt="another project" 
                    className="about-img" placeholder="tracedSVG" />
                    <article>
                        <h3>Tools of the trade</h3>
                    </article>
                </section>
            </main>
        </Layout>
    )
}

export default About
